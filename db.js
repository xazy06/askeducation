import configDb from './config/mongoose.config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

const db = mongoose.connect(configDb.dbURL, configDb.dbOptions);
const connection = mongoose.connection;
let timer = null;

let connectWithRetry = () => {
  return mongoose.connect(configDb.dbURL, err => {
    clearTimeout(timer);

    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      timer = setTimeout(connectWithRetry, 5000);
    }
  });
};

connection.on('disconnected', () => {
  console.warn('MongoDB disconnected!');
  connectWithRetry();
});

export default {db, connection};
