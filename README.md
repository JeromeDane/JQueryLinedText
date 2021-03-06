JQueryLinedText
===============

One of the most used, but under featured HTML controls, is the humble TEXTAREA control. This control is designed to accept large blocks of text from the user. A wide variety of plugins exist for the TEXTAREA that layer it with toolbars, auto-resizing, rich-text editing and the works.

However, for my usage, this was way over kill. I wanted a simple line-number facility that would allow my users easily see where they are. Particuraly handy for editing code online. After searching, I couldn't find one, so I simply created my own plugin.


Quickly and easily to install, very light weight, you simply tell it which TEXTAREA's you want to be line tracked and it will go and do its thing. You can pass if you want a line highlighted. While it doesn't highlight the line inside the TEXTAREA control it highlights the side bar at the relevant place.

```
$(function() {

  // Target all classed with ".lined"
  $(".lined").linedtextarea(
    {selectedLine: 1}
  );

  // Target a single one
  $("#mytextarea").linedtextarea();

});
```

Installation: Copy the files to your web server and insert the .js and .css file and you are good to go. Requires JQuery 1.7+

## Installing with npm

This plugin can (and should) be installed using npm.  Include the following dependency in your `package.json`:

```
...
  "dependencies": {
    "JQueryLinedText": "git+https://github.com/JeromeDane/JQueryLinedText.git"
  }
...
```

## Examples

There are two examples to play with. Clone this repository to your local machine to give them a try. `examples/basic.html` shows how to load and use this jQuery plugin in a static (traditional) web page. `examples/browserify.html` shows how to use it with npm and browserify.

To use the browserify example, you will need to have [NodeJS](http://nodejs.org) installed. In your command line interface, navigate to the root folder of wherever you cloned this repository to your local machine and type the following command to install dependencies:

```
npm install
```

Next create `examples/browserify.bundle.js` by typing the following in your command line:

```
npm run build
```

You should now be able to open `examples/browserify.html`.

Be sure to re-build your bundle file any time you make changes, or you can start the watch script to automatically rebundle everything by typing the following in your command line:

```
npm run watch
```