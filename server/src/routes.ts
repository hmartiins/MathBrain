import { Router } from 'express';

import BhaskaraController from './controllers/BhaskaraController';
import AreaController from './controllers/AreaController';

const routes =  Router();

routes.post('/bhaskaraAcount', BhaskaraController.index);
routes.post('/areaAcount/triangle', AreaController.triangle);
routes.post('/areaAcount/rectangle', AreaController.rectangle);
routes.post('/areaAcount/circle', AreaController.circle);

export default routes;