import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/Index.controller';
import { Auth } from '../middlewares/Auth.middleware';
routes.route('/').get(Auth, Index);

import {
  GETusers,
  POSTuser,
  PUTuser,
  DELETEuser,
} from '../controllers/User.controller';
routes
  .route('/users')
  .get(GETusers)
  .post(POSTuser)
  .put(PUTuser)
  .delete(DELETEuser);

routes.route('*').get(BadUrl);
export default routes;
