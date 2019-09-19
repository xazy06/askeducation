var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
import router from './router'

const app = express();

mongoose.connect(configDb.dbURL, configDb.dbOptions);
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`);
    app.listen(process.env.PORT || configDb.port,
      () => console.log(`Server start on port ${configDb.port} ...`))
  })
  .on('error', error => console.warn(error));

app.use(logger('dev'));
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

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
