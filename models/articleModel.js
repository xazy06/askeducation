import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  title: { type: String },
  date: { type: String },
  url: { type: String },
  text: { type: String }
});

let article = {
  model: mongoose.model('Article', schema),
};

article.crud = new CRUD(article.model);

export default article;
