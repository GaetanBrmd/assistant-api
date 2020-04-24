import { Router } from 'express';
import user from './routes/user.routes';
import computing from './routes/computing.routes';

export default () => {
  const app = Router();

  user(app);
  computing(app);

  return app;
};
