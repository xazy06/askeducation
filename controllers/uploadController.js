import ApiController from "./apiController";

const path = require('path');
const save = require('../modules/save');

class UploadController extends ApiController {
  constructor(){
    super();
  }

  async post(req, res) {
    const imagePath = path.join(__dirname, '../public/images');
    const fileUpload = new save(imagePath);
    let filename;

    if (!req.files) {
      super.response(res, 'Please provide an image', 401);
    }

    filename = await fileUpload.save(req.files);

    return super.response(res, '', 200, { files: filename });

  }
}

const controller = new UploadController();
export default controller;
