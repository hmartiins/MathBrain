import { Router } from 'express';

import BhaskaraController from './controllers/BhaskaraController';

const routes =  Router();

routes.post('/a', BhaskaraController.index);

export default routes;