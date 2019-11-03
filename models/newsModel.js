import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  title: { type: String },
  date: { type: String },
  text: { type: String },
  seoDescription: { type: String },
  seoTitle: { type: String },
  seoKeywords: { type: String }
});

let news = {
  model: mongoose.model('News', schema),
};

news.crud = new CRUD(news.model);

export default news;
