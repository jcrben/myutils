#!/usr/bin/env node

var fs = require('fs');
var cb = function () {
  process.send({m: 'message'});
}
setInterval(cb, 1000);


// var string = 'some random string';
// fs.writeFile('somefile.txt', string, function(err) {
//   if (err) throw err;
//   console.log('saved file');
// })
// process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  console.log('receiving data');
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});