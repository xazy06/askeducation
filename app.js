const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const router = require('./router/index');
import db from './db'
const PORT = 8081;
const app = express();
const cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

db.connection.once('open', () => {
  console.log(`Mongoose - successful connection ...`);
  app.listen(process.env.PORT || PORT, () => console.log(`Server start on port ${process.env.PORT||PORT} ...`));
}).on('error', error => console.warn(error));

module.exports = app;
