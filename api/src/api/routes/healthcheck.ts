import { Application, Router, Request, Response, NextFunction } from 'express';
import { info } from '@/services/logging';

const route = function(app: Application, router: Router): Router {
  router.get('/healthcheck', common, healthcheck);
  return router;
}

const common = (req: Request, res: Response, next: NextFunction): void => {
  info('processing healthcheck', 'healthcheck');
  return next();
}

export const healthcheck = (req: Request, res: Response): void => {
  res.json({ status: 'ok', message: 'system is online' });
}

export default {
  name: 'healthcheck',
  route
}