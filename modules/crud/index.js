import ApiController from "../../controllers/apiController";

class CRUD extends ApiController {
  constructor(model){
    super();
    this.model = model;
  }

  get(req, res){
    const id = req.params.id && +req.params.id || null;

    if(id === null) {
      return this.model.find((err, instances) => {
        return super.response(res, err, 200, instances);
      });
    }

    this.model.findById((err, instance) => {
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

    const instance = new model({
      name: req.body.name
    });

    instance.save((err) => super.response(res, err, 200, instance.id));
  }

  put(req, res){
    const id = Number(req.params.id);

    this.model.findById((err, instance) => {
      if(!instance) {
        return super.response(res, 'not found exception', 404);
      }

      instance.keys().eachAsync((key) => {
        instance[key] = req.body[key];
      });

      instance.save((err) => super.response(res, err, err&& 500 || 200, instance.id));

    });

    let conversationFound;
    let itemIndex;

    store.map((conversation, index) => {
      if (conversation.id === id) {
        conversationFound = conversation;
        itemIndex = index;
      }
    });

    if (!conversationFound) {
      return res.status(404).send({
        success: 'false',
        message: 'conversation not found'
      });
    }
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    }

    const updatedConversation = {
      id: conversationFound.id,
      title: req.body.title || conversationFound.title
    };

    store.splice(itemIndex, 1, updatedConversation);

    return res.status(201).send({
      success: 'true',
      message: 'conversation added successfully',
      updatedConversation
    });
  }

  delete(req, res){
    const id = +req.params.id;

    this.model.findById.call(this, (err, instance) => {
      if(!instance) {
        return super.response(res, 'not found exception', 404);
      }

      // TODO
      instance.delete({id: id});

      return super.response(res, false, 200, instance);
    });
  }
}

export default CRUD;


