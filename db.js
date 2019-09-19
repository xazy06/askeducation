const configDb = require('./config/mongoose.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
