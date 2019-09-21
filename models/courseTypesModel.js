import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String },
  lang: {type: Object}
});

let courseType = {
  model: mongoose.model('courseType', schema),
};

spec.crud = new CRUD(courseType.model);

export default courseType;
