import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String },
  lang: {type: String}
});

let courseType = {
  model: mongoose.model('CourseType', schema),
};

courseType.crud = new CRUD(courseType.model);

export default courseType;
