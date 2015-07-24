var daemon = require('daemonize').setup({
  main: 'notify.js',
  name: 'notify',
  pidfile: 'notify.pid'
});

switch (process.argv[2]) {
  
  case 'start':
    daemon.start();
    break;

  case 'stop':
    daemon.stop();
    break;

  default:
    console.log()

}