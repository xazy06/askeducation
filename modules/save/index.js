const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');

class Save {
  constructor(folder) {
    this.folder = folder;
  }
  async save(files) {
    let filename;
    let filepath;
    let fileNames = [];

    for (let i=0; i < files.length; i++) {
      filename = Save.filename();
      filepath = this.filepath(filename);
      fileNames.push(filename);
      await sharp(files[i].buffer).toFile(filepath);
    }

    //await sharp(buffer)
      // .resize(300, 300, {
      //   fit: sharp.fit.inside,
      //   withoutEnlargement: true
      // })
      //.toFile(filepath);

    return fileNames;
  }
  static filename() {
    return `${uuidv4()}.png`;
  }

  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Save;
