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

module.exports = Router;
