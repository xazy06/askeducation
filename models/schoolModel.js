import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  title: { type: String },
  date: { type: String },
  url: { type: String },
  text: { type: String }
});

let school = {
  model: mongoose.model('School', schema),
};

school.crud = new CRUD(school.model);

export default school;
