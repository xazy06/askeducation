'use strict';

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var router = require('./router/index');

var PORT = 8081;
var app = express();
var cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

_db2.default.connection.once('open', function () {
  console.log('Mongoose - successful connection ...');
  app.listen(process.env.PORT || PORT, function () {
    return console.log('Server start on port ' + (process.env.PORT || PORT) + ' ...');
  });
}).on('error', function (error) {
  return console.warn(error);
});

module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBhdGgiLCJjb29raWVQYXJzZXIiLCJsb2dnZXIiLCJzYXNzTWlkZGxld2FyZSIsInJvdXRlciIsIlBPUlQiLCJhcHAiLCJjb3JzIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNyYyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJkZXN0IiwiaW5kZW50ZWRTeW50YXgiLCJzb3VyY2VNYXAiLCJzdGF0aWMiLCJkYiIsImNvbm5lY3Rpb24iLCJvbmNlIiwiY29uc29sZSIsImxvZyIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJvbiIsIndhcm4iLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBTUE7Ozs7OztBQU5BLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUUsZUFBZUYsUUFBUSxlQUFSLENBQXJCO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFNSSxpQkFBaUJKLFFBQVEsc0JBQVIsQ0FBdkI7QUFDQSxJQUFNSyxTQUFTTCxRQUFRLGdCQUFSLENBQWY7O0FBRUEsSUFBTU0sT0FBTyxJQUFiO0FBQ0EsSUFBTUMsTUFBTVIsU0FBWjtBQUNBLElBQU1TLE9BQU9SLFFBQVEsTUFBUixDQUFiOztBQUVBTyxJQUFJRSxHQUFKLENBQVFOLE9BQU8sS0FBUCxDQUFSO0FBQ0FJLElBQUlFLEdBQUosQ0FBUUQsTUFBUjtBQUNBRCxJQUFJRSxHQUFKLENBQVFWLFFBQVFXLElBQVIsRUFBUjtBQUNBSCxJQUFJRSxHQUFKLENBQVFWLFFBQVFZLFVBQVIsQ0FBbUIsRUFBQ0MsVUFBVSxLQUFYLEVBQW5CLENBQVI7QUFDQUwsSUFBSUUsR0FBSixDQUFRUCxjQUFSO0FBQ0FLLElBQUlFLEdBQUosQ0FBUUwsZUFBZTtBQUNyQlMsT0FBS1osS0FBS2EsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBRGdCO0FBRXJCQyxRQUFNZixLQUFLYSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsUUFBckIsQ0FGZTtBQUdyQkUsa0JBQWdCLElBSEssRUFHQztBQUN0QkMsYUFBVztBQUpVLENBQWYsQ0FBUjs7QUFPQVgsSUFBSUUsR0FBSixDQUFRVixRQUFRb0IsTUFBUixDQUFlbEIsS0FBS2EsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUjtBQUNBUixJQUFJRSxHQUFKLENBQVFKLE1BQVI7O0FBRUFlLGFBQUdDLFVBQUgsQ0FBY0MsSUFBZCxDQUFtQixNQUFuQixFQUEyQixZQUFNO0FBQy9CQyxVQUFRQyxHQUFSO0FBQ0FqQixNQUFJa0IsTUFBSixDQUFXQyxRQUFRQyxHQUFSLENBQVlyQixJQUFaLElBQW9CQSxJQUEvQixFQUFxQztBQUFBLFdBQU1pQixRQUFRQyxHQUFSLDRCQUFvQ0UsUUFBUUMsR0FBUixDQUFZckIsSUFBWixJQUFrQkEsSUFBdEQsV0FBTjtBQUFBLEdBQXJDO0FBQ0QsQ0FIRCxFQUdHc0IsRUFISCxDQUdNLE9BSE4sRUFHZTtBQUFBLFNBQVNMLFFBQVFNLElBQVIsQ0FBYUMsS0FBYixDQUFUO0FBQUEsQ0FIZjs7QUFLQUMsT0FBT0MsT0FBUCxHQUFpQnpCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBzYXNzTWlkZGxld2FyZSA9IHJlcXVpcmUoJ25vZGUtc2Fzcy1taWRkbGV3YXJlJyk7XG5jb25zdCByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlci9pbmRleCcpO1xuaW1wb3J0IGRiIGZyb20gJy4vZGInXG5jb25zdCBQT1JUID0gODA4MTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG5cbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2Uoc2Fzc01pZGRsZXdhcmUoe1xuICBzcmM6IHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSxcbiAgZGVzdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpLFxuICBpbmRlbnRlZFN5bnRheDogdHJ1ZSwgLy8gdHJ1ZSA9IC5zYXNzIGFuZCBmYWxzZSA9IC5zY3NzXG4gIHNvdXJjZU1hcDogdHJ1ZVxufSkpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xuYXBwLnVzZShyb3V0ZXIpO1xuXG5kYi5jb25uZWN0aW9uLm9uY2UoJ29wZW4nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBNb25nb29zZSAtIHN1Y2Nlc3NmdWwgY29ubmVjdGlvbiAuLi5gKTtcbiAgYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnQgb24gcG9ydCAke3Byb2Nlc3MuZW52LlBPUlR8fFBPUlR9IC4uLmApKTtcbn0pLm9uKCdlcnJvcicsIGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcbiJdfQ==