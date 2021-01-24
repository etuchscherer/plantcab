import express = require('express');
import { info } from '@/services/logging';
import * as _routes from '@/api/routes';

const label = 'route-loader';

export default function(app: express.Application): express.Application {
  const router = express.Router();
  const routeModules = Object.values(_routes.default);

  info('initializing route loader', label);

  routeModules.forEach(routeModule => {
    info('loading route :: ' + routeModule.name, label);
    app.use(routeModule.route(app, router));
  });

  info('finished loading all routes', label);
  return app;
}