import { Router } from 'express';

import BhaskaraController from './controllers/BhaskaraController';

const routes =  Router();

routes.get('/a', BhaskaraController.index);

export default routes;