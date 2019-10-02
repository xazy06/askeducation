import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String },
  cities: {type: Array }
});

let country = {
  model: mongoose.model('country', schema),
};

country.crud = new CRUD(country.model);

export default country;
