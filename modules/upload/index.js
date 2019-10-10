const multer = require('multer');

const upload = multer({
  // destination: '/public/images',
  limits: {
    fileSize: 40 * 1024 * 1024,
  }
});

module.exports = upload
