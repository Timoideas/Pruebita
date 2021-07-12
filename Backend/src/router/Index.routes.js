import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/Index.controller';
import { Auth } from '../middlewares/Auth.middleware';
routes.route('/').get(Auth, Index);
routes.route('*').get(BadUrl);

import {
  GETuser,
  POSTuser,
  PUTuser,
  DELETEuser,
} from '../controllers/User.controller';
routes
  .route('/users')
  .get(GETuser)
  .post(POSTuser)
  .put(PUTuser)
  .delete(DELETEuser);

export default routes;
