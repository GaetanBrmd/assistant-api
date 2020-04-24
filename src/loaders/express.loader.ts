import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import session from 'client-sessions';
import routes from '../api';

export default async ({ app }: { app: express.Application }) => {
  //Status
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cors({ origin: ['http://localhost:4200'], credentials: true }));

  app.use(helmet());

  app.use(bodyParser.json());

  app.use(
    session({
      cookieName: 'session',
      secret: 'random_string_goes_here',
      duration: 30 * 60 * 1000,
      activeDuration: 5 * 60 * 1000,
      resave: false,
      saveUninitialized: true,
    }),
  );

  app.use('', routes());

  //Error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });

  console.log('Express loaded 🔥 !');
};
