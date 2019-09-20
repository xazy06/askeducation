import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String }
});

let spec = {
  model: mongoose.model('Spec', schema),
};

spec.crud = new CRUD(spec.model);

export default spec;
