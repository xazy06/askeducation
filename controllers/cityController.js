import ApiController from './apiController'
import model from '../models/cityModel'

class CityController extends ApiController {
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

const controller = new CityController();
export default controller;
