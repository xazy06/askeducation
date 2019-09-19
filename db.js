import configDb from './config/mongoose.config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
const db = mongoose.connect(configDb.dbURL, configDb.dbOptions);
const connection = mongoose.connection;

export default {db, connection};
