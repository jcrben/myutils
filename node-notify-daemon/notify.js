var fs = require('fs');
var sys = require('sys');
var chokidar = require('chokidar');
var globToRegExp = require('glob-to-regexp');

chokidar.watch('/Users/MacbookRetina', 
  {
    ignored: function(path) {
      // console.log('testing path:', path);
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

// chokidar.watch('/Users/MacbookRetina', 
//   {
//     depth: 1, 
//     ignoreInitial: true, 
//     ignored: function (path, fsStats) {
//       console.log('path:', path, 'fsStats:', fsStats);
//     }
//   }).on('all', function(event, path) {
//     console.log('event:', event, 'path:', path);
// });