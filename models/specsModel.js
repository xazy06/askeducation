import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const specModel = new Schema({
  name: { type: String   }
})
export default mongoose.model('books', specModel)
