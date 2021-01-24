import express = require('express');
import { info } from '@/services/logging';

const label = 'express-loader';

const startServer = async (): Promise<express.Application> => {

  info('initializing express.application', label);

  const app = express();

  info('finished', label);
  return app;
}

export default startServer;