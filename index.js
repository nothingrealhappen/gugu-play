import http from 'http';
import readline from 'readline';
import gugu from 'node-gugu';
import express from 'express';
import Gugu from 'gugu-node';

import CONFIG from './config';

const app = express();
let list = [];

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./list.txt')
});

lineReader.on('line', function (line) {
  list.push(line);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('public'));

const GU = new Gugu(CONFIG);

GU.setup()
  .then(() => {
    app.listen(8090, data => console.log('server running at http://localhost:8090...'));
  });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/print', (req, res) => {
  const str = printQuestion();
  res.json({status: 'ok', message: str});
});

function printQuestion() {
  const str = list[Math.floor(Math.random() * list.length)]
  GU.print(str);
  return str
}
