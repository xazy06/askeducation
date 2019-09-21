import express from 'express'
const Router = express.Router();
import specController from '../controllers/specController'

Router.get('/api/spec', specController.get);
Router.get('/api/spec/:id', specController.get);
Router.delete('/api/spec/:id', specController.delete);
Router.post('/api/spec', specController.post);
Router.put('/api/spec/:id', specController.put);

export default Router;
