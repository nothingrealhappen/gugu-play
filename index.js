import http from 'http';
import gugu from 'node-gugu';
import express from 'express';

import CONFIG from './config';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

gugu(CONFIG, data => {
  app.listen(8090, data => console.log('server running...'));
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/print', (req, res) => {
  res.json({status: 'ok'});
});

// gugu.printpaper([
//     'Hello',
//     'World!'
// ], function(data) {
// });
