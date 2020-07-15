import express = require('express');
import { info } from '@/services/logging';
import { label } from '@/loaders';

const app = express();

const startServer = async () => {

  info('initializing express app', label);

  // define a route handler for the default home page
  app.get('/', (req, res) => {
    res.send('Hello world!');
  });

  return app;
}

export default startServer;