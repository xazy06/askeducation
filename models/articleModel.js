import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  title: { type: String },
  date: { type: String },
  url: { type: String },
  isArchive: { type: Boolean },
  text: { type: String },
  seoDescription: { type: String },
  seoTitle: { type: String },
  seoKeywords: { type: String }
});

let article = {
  model: mongoose.model('Article', schema),
};

article.crud = new CRUD(article.model);

export default article;
