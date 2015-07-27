var fs = require('fs');
var sys = require('sys');
var chokidar = require('chokidar');
var globToRegExp = require('glob-to-regexp');

// on recommendation at http://stackoverflow.com/a/13705878/4200039
chokidar.watch('/Users/MacbookRetina', 
  {
    ignored: function(path) {
      var re = globToRegExp('/Users/MacbookRetina/Library/Application Support/Sublime Text 3/**');
      if (re.test(path)) {
        return true;
      }
    },
    depth: 3, 
    ignoreInitial: true, 
  }).on('all', function(event, path) {
    console.log('event:', event, 'path:', path);
});
