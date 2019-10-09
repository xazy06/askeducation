// function route(req, res, next){
//   console.log('req.method', req.method);
//   Router[String(req.method).toLowerCase()](req, function(req, res, next) {
//     res.status(200).send({
//       success: 'true',
//       message: 'conversations retrieved succesfully'
//     });
//   });
// }
import express from 'express'
import specController from '../controllers/specController'
import courseTypesController from "../controllers/courseTypesController";
import langController from "../controllers/langController";
import cityController from "../controllers/cityController";
import countryController from "../controllers/countryController";
import articleController from "../controllers/articleController";
import newsController from "../controllers/newsController";
import schoolController from "../controllers/schoolController";
import uploadController from "../controllers/uploadController";
const upload = require('../modules/upload');

const Router = express.Router();

/* GET home page. */
Router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Router.get('/api/spec', specController.get);
Router.get('/api/spec/:id', specController.get);
Router.delete('/api/spec/:id', specController.delete);
Router.post('/api/spec', specController.post);
Router.put('/api/spec/:id', specController.put);

Router.get('/api/type', courseTypesController.get);
Router.get('/api/type/:id', courseTypesController.get);
Router.delete('/api/type/:id', courseTypesController.delete);
Router.post('/api/type', courseTypesController.post);
Router.put('/api/type/:id', courseTypesController.put);

Router.get('/api/lang', langController.get);
Router.get('/api/lang/:id', langController.get);
Router.delete('/api/lang/:id', langController.delete);
Router.post('/api/lang', langController.post);
Router.put('/api/lang/:id', langController.put);

Router.get('/api/city', cityController.get);
Router.get('/api/city/:id', cityController.get);
Router.delete('/api/city/:id', cityController.delete);
Router.post('/api/city', cityController.post);
Router.put('/api/city/:id', cityController.put);

Router.get('/api/country', countryController.get);
Router.get('/api/country/:id', countryController.get);
Router.delete('/api/country/:id', countryController.delete);
Router.post('/api/country', countryController.post);
Router.put('/api/country/:id', countryController.put);

Router.get('/api/article', articleController.get);
Router.get('/api/article/:id', articleController.get);
Router.delete('/api/article/:id', articleController.delete);
Router.post('/api/article', articleController.post);
Router.put('/api/article/:id', articleController.put);

Router.get('/api/news', newsController.get);
Router.get('/api/news/:id', newsController.get);
Router.delete('/api/news/:id', newsController.delete);
Router.post('/api/news', newsController.post);
Router.put('/api/news/:id', newsController.put);

Router.get('/api/school', schoolController.get);
Router.get('/api/school/:id', schoolController.get);
Router.delete('/api/school/:id', schoolController.delete);
Router.post('/api/school', schoolController.post);
Router.put('/api/school/:id', schoolController.put);
Router.post('/api/upload',  upload.array('image[]', 10), uploadController.post);

// Router.post('/api/upload',  upload.single('image'), async function (req, res) {
//   const imagePath = path.join(__dirname, '../public/images');
//   const fileUpload = new Save(imagePath);
//   if (!req.file) {
//     res.status(401).json({error: 'Please provide an image'});
//   }
//   const filename = await fileUpload.save(req.file.buffer);
//   return res.status(200).json({ name: filename });
//
// });

module.exports = Router;
