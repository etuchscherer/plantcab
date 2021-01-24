import express = require('express');
import { info } from '@/services/logging';
import { label } from '@/loaders';
import * as _routes from '@/api/routes';

const startServer = async (): Promise<express.Application> => {

  info('initializing express app', label);

  const app = express();
  const router = express.Router();
  const routeModules = Object.values(_routes.default);

  info('initializing routes', label);

  routeModules.forEach(routeModule => {
    info('loading route :: ' + routeModule.name, label);
    app.use(routeModule.route(app, router));
  });

  info('done', label);
  return app;
}

export default startServer;