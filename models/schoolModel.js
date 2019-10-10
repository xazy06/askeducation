import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  img: { type: String },
  galery: { type: Array },
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
  seoKeywords: { type: String },
  starting: { type: String },
  lessonsCount: { type: Number },
  lessonLength: { type: String },
  studentsPerGroup: { type: Number },
  livingCost: { type: String },
  closestCity: {type: Object },
  food: {type: String },
  accommodations: {type: String }
});

// ,{
//   autoIndex: process.env('mode') === 'development'
// }

let school = {
  model: mongoose.model('School', schema),
};

school.crud = new CRUD(school.model);

export default school;
