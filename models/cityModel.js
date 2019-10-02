import mongoose from 'mongoose';
import CRUD from '../modules/crud/';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String }
});

let city = {
  model: mongoose.model('city', schema),
};

city.crud = new CRUD(city.model);

export default city;
