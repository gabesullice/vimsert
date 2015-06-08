!function ($, document, window) {
  "use strict";

  var init, selector, currentTarget,
      createEditor, addVimsert, keypressHandler,
      textAreaHandler,
      aceEditor, veditor,
      openEditor, closeEditor;

  selector = $('textarea').not('.ace_editor').add('input[type="text"]');

  $.fn.vimsert = function () {
    this.bind('keypress', function(e) {

      if (e.ctrlKey && e.charCode == 9) {
        keypressHandler(e);
        e.preventDefault();
      }
    });
  };

  keypressHandler = function (e) {
    var content;

    /**
     * TODO: split this out into a separate function to further decouple it from the event.
     */

    currentTarget = $(e.currentTarget);
    content = currentTarget.val();
    aceEditor.setValue(content);
    openEditor(veditor);
  };

  init = function () {
    createEditor();
    addVimsert();
  };

  createEditor = function () {
    $("body").append('<textarea id="vimsert-editor" rows="100" cols="80"></textarea>');
    $("vimsert-editor").css({
      "position": "absolute",
      "top": "0",
      "left": "0",
      "bottom": "0",
      "right": "0"
    });

    aceEditor = ace.edit("vimsert-editor");
    aceEditor.setTheme("ace/theme/solarized_dark");
    ace.config.loadModule("ace/keyboard/vim", function(m) {
      var VimApi = require("ace/keyboard/vim").CodeMirror.Vim;
      VimApi.defineEx("write", "w", function(cm, input) {
        console.log(currentTarget);
        currentTarget.val(aceEditor.getValue());
      });
      VimApi.defineEx("quit", "q", function(cm, input) {
        closeEditor();
      });
      VimApi.defineEx("wq", "wq", function(cm, input) {
        currentTarget.val(aceEditor.getValue());
        closeEditor();
      });
    });
    aceEditor.setKeyboardHandler("ace/keyboard/vim");
    aceEditor.getSession();

    veditor = $('.ace_editor');

    veditor.css({
      "display": "none",
      "height": "75%",
      "width": "75%",
      "position": "fixed",
      "font-size": "15px",
      "z-index": "9999",
      "left": "50%",
      "top": "50%",
      "transform": "translateX(-50%) translateY(-55%)",
      "box-shadow": "#000 0 0 10px"
    });
  };

  addVimsert = function () {
    $(selector).vimsert();
  };

  openEditor = function () {
    veditor.css("display", "block");
    aceEditor.focus();
    aceEditor.clearSelection();
  };

  closeEditor = function () {
    veditor.css("display", "none");
    setTimeout(function () {
      var index = currentTarget.val().length * 2;
      currentTarget[0].setSelectionRange(index, index);
      currentTarget.focus()
    }, 100);
  };

  init();
}(jQuery, document, window);
