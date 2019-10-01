import ApiController from "../../controllers/apiController";
import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId;

class CRUD extends ApiController {
  constructor(model) {
    super();
    this.model = model;
  }

  get(req, res){
    let id = req.params.id && +req.params.id || null;

    if(id === null) {
      return this.model.find((err, instances) => {
        return super.response(res, err, 200, instances);
      });
    }

    id = ObjectId(id);

    this.model.findById(id,(err, instance) => {
      if(!instance) {
        return super.response(res, 'not found exception', 404);
      }
      return super.response(res, false, 200, instance);
    });

  }

  post(req, res){
    if (!req.body.name) {
      return super.response(res, 'name is required', 400);
    }

    const instance = new this.model(req.body);

    return instance.save((err) => super.response(res, err, 200, instance.id));
  }

  put(req, res){
    let id = req.params.id;
    id = ObjectId(id);

    this.model.findById(id,(err, instance) => {
      if(!instance) {
        return super.response(res, 'not found exception', 404);
      }

      Object.keys(req.body).forEach(key => instance[key] = req.body[key]);

      return instance.save((err) => super.response(res, err, err && 500 || 200, instance.id));
    });
  }

  delete(req, res){
    let id = req.params.id;
    id = ObjectId(id);

    return this.model.findById(id, (err, instance) => {
      if(!instance) {
        return super.response(res, 'not found exception', 404);
      }

      instance.delete({id: id});
      return super.response(res, false, 200, instance);
    });
  }
}

export default CRUD;


