import ApiController from './apiController'
import model from '../models/countryModel'

class CountryController extends ApiController {
  constructor(){
    super();
  }

  get (req, res) {
    return model.crud.get(req, res);
  }

  delete(req, res) {
    return model.crud.delete(req, res);
  }

  post(req, res) {
    return model.crud.post(req, res);
  }

  put(req, res) {
    return model.crud.put(req, res);
  }
}

const controller = new CountryController();
export default controller;
