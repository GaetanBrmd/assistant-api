//Liste de toutes les routes et de leur requirements avec celebrate

import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import sheetCtrl from '../../controllers/sheet.controller';

const route = Router();

export default (app: Router) => {
  app.use('/computing', route);

  route.get('/sheet', middlewares.attachSession, middlewares.isAuth, sheetCtrl.getSheets);

  route.post(
    '/sheet',
    middlewares.attachSession,
    middlewares.isAuth,
    celebrate({
      body: Joi.object({
        titre: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        contenu: Joi.string().required(),
      }),
    }),
    sheetCtrl.addSheet,
  );

  route.patch(
    '/sheet',
    middlewares.attachSession,
    middlewares.isAuth,
    celebrate({
      body: Joi.object({
        _id: Joi.string().required(),
        titre: Joi.string().optional(),
        type: Joi.string().optional(),
        description: Joi.string().optional(),
        contenu: Joi.string().optional(),
      }),
    }),
    sheetCtrl.updSheet,
  );

  route.post(
    '/sheet/del',
    middlewares.attachSession,
    middlewares.isAuth,
    celebrate({
      body: Joi.object({
        _id: Joi.string().required(),
      }),
    }),
    sheetCtrl.delSheet,
  );
};
