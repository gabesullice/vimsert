![Vimsert logo](/icon.png)
Vimsert
=======

###Overview
Vimsert is a simple, open-source Chrome extension that allows you to open up a
code editor for any textarea. It is based on the [Ace editor][ace_editor] and
has its vim keybindings enabled.

###Installation
From your chrome browser, [click here][vimsert_plugin] and 'add to chrome'.

###Usage:
Open the editor
    
    Ctrl + i # focus must be on a textarea

Write changes to the textarea

    :w

Close vimsert

    :q

Write, then Close

    :wq

###Contributing
PRs are welcome! Fork, create a topic branch, do your work, submit a PR into
`master`.

Some things I would be grateful for:
- Screenshots/logo
- Better name ideas, or let me know this one's not terrible
- Make Vimsert play nicely with Vimium

This project uses the [Ace code editor][ace_editor].

###License
*Help wanted* I'm not a lawyer, feel free to submit a PR adding a license with
an ELI5. I'd really only like attribution.

Vimsert makes use of the [Ace editor][ace_editor] which is licensed under the
BSD license, you can find its license [here][ace_license].

[ace_editor]: http://ace.c9.io
[vimsert_plugin]: https://chrome.google.com/webstore/detail/vimsert/eljjplndnkopkklknfggleclpmiiddac
[ace_license]: https://github.com/ajaxorg/ace/blob/master/LICENSE
