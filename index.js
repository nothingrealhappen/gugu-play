const CONFIG = require('./config');
const gugu = require('node-gugu');

gugu(CONFIG, data => {
  console.log('ok');
  // gugu.printpaper([
  //     'Hello',
  //     'World!'
  // ], function(data) {
  // });
});
