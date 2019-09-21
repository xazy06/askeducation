import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String }
});

let lang = {
  model: mongoose.model('lang', schema),
};

spec.crud = new CRUD(lang.model);

export default lang;
