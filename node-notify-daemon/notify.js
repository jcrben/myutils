var fs = require('fs');
var sys = require('sys');
var chokidar = require('chokidar');

chokidar.watch('/Users/MacbookRetina', 
  {
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