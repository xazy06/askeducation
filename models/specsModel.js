import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const Spec = new Schema({
  name: { type: String }
});

let spec = {
  model: mongoose.model('Spec', Spec),
};

spec.crud = new CRUD(spec.model);

export default spec;
