import configDb from './config/mongoose.config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
const db = mongoose.connect(configDb.dbURL, configDb.dbOptions);

export default db;
