import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String },
  age: { type: String },
  courses: { type: Array },
  description: { type: String },
  cost: { type: String },
  country: { type: Object },
  city: { type: Object },
  currency: { type: String },
  lang: { type: Object },
  seoUrl: { type: String },
  seoDescription: { type: String },
  seoTitle: { type: String },
  seoKeywords: { type: String }
});

let school = {
  model: mongoose.model('School', schema),
};

school.crud = new CRUD(school.model);

export default school;
