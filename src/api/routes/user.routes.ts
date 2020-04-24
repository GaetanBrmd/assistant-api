//Liste de toutes les routes et de leur requirements avec celebrate

import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import userCtrl from '../../controllers/user.controller';

const route = Router();

export default (app: Router) => {
  app.use('/user', route);

  route.post('/login', userCtrl.login);

  route.post(
    '/new',
    celebrate({ body: Joi.object({ email: Joi.string().email().required(), password: Joi.string().required() }) }),
    userCtrl.register,
  );

  route.get('/logout', middlewares.attachSession, middlewares.isAuth, userCtrl.logout);

  route.get('', middlewares.attachSession, middlewares.isAuth, (req: Request, res: Response) => {
    res.json('Connected');
  });
};
