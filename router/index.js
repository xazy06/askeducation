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

module.exports = Router;
