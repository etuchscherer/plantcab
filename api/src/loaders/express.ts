import express = require('express');
import routes from '@/api/routes';
import { info } from '@/services/logging';
import { label } from '@/loaders';

const startServer = async (): Promise<express.Application> => {

  info('initializing express app', label);

  const app = express();
  const router = express.Router();

  info('initializing routes', label);

  routes.forEach(route => {
    app.use(route(app, router));
  });

  return app;
}

export default startServer;