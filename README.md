![Vimsert logo](/demo/assets/logo.png)
Vimsert
=======

###Overview
Vimsert is a simple, open-source Chrome extension for editing inputs on the
web. It puts the power of Vim and the [Ace editor][ace_editor] together in the
browser. Better yet, it uses the awesome [Solarized][solarized_theme] dark theme.

![Animated GIF demo](/demo/assets/demo.gif)

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

A few contrib ideas:
- Make Vimsert play more nicely with Vimium
- See [license](#license) below
- Issues
- No reason this couldn't also work in Firefox

###License
*Help wanted* I'm not a lawyer, feel free to submit a PR adding a license with
an ELI5. I'd really only like attribution and I'm not sure which to choose.

###Credit
Vimsert utilizes the following open source projects:
- [Ace editor](ace_editor)
- [Solarized](solarized_theme)
- [jQuery](jquery_home)

Special thanks goes to Nino Silva for the logo design.

[ace_editor]: http://ace.c9.io
[solarized_theme]: http://ethanschoonover.com/solarized
[jquery_home]: https://jquery.com
[vimsert_plugin]: https://chrome.google.com/webstore/detail/vimsert/eljjplndnkopkklknfggleclpmiiddac
[ace_license]: https://github.com/ajaxorg/ace/blob/master/LICENSE
