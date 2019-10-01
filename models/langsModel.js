import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String }
});

let lang = {
  model: mongoose.model('lang', schema),
};

lang.crud = new CRUD(lang.model);

export default lang;
