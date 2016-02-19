import http from 'http';
import gugu from 'node-gugu';
import express from 'express';

import CONFIG from './config';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('public'));

gugu(CONFIG, data => {
  app.listen(8090, data => console.log('server running...'));
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/print', (req, res) => {
  res.json({status: 'ok'});
  printQuestion();
});

function printQuestion() {
  gugu.printpaper([
    'ok, send text!'
  ], function(data) {
  });
}
