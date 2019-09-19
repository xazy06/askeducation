import ApiController from './apiController'
import spec from '../models/specsModel'

class SpecController extends ApiController {
  constructor(){
    super();
  }

  get (req, res) {
    return spec.crud.get(req, res);
  }

  delete(req, res) {
    return spec.crud.delete(req, res);
  }

  post(req, res) {
    return spec.crud.post(req, res);

  }

  put(req, res) {
    return spec.crud.post(req, res);
  }
}

const specController = new SpecController();
export default specController;
