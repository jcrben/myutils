spawn = require("child_process").spawn;

// var child = spawn(process.execPath, [], {
//         env: process.env,
//         stdio: [process.stdin, process.stdout, process.stderr],
//         detached: true
//     }
// );

var child = spawn('/Users/MacbookRetina/projects/' +
                   'myutils/node-notify-daemon/subprocess.js', 
                  [], { stdio: ['pipe', 1, 'pipe', 'ipc'], detached: true });
console.log('newly created child:', child);

child.on('message', function(m) {
  console.log('parent receiving', m);
})

child.stdin.write('dropping some info into child\n');

child.on('exit', function() {
  console.log('exiting now');
});

child.on('close', function() {
  console.log('closing now');
});