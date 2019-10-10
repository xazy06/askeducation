import ApiController from "./apiController";
import staticRoot from '../modules/staticRoot';

const path = require('path');
const fs = require('fs');
const save = require('../modules/save');


class UploadController extends ApiController {
  constructor(){
    super();
  }

  async post(req, res) {
    const imagePath = path.join(__dirname, staticRoot);
    const fileUpload = new save(imagePath);
    let filename;

    if (!req.files) {
      super.response(res, 'Please provide an image', 401);
    }

    filename = await fileUpload.save(req.files);

    return super.response(res, '', 200, { files: filename });

  }

  async get(req, res) {
    const imagePath = path.join(__dirname, staticRoot);

    return fs.readdir(imagePath,  (err, list) => {
      if(list === undefined) {
        console.error(err)
        return super.response(res, err, 500);
      }

      list = list.map(file => {
        return `/static/images/${file}`;
      });

      return super.response(res, '', 200, { files: list });
    })
  }
}

const controller = new UploadController();
export default controller;
