import * as express from 'express';
import SystemManager from '@/services/systemManager';
import { info } from '@/services/logging';

const label = 'bootstrap';

const loadSystemManager = (app: express.Application) => {

  info('instansiating the System Manager', label);
  const config = {
    boardOptions: {} // fill these in later ??
  }
  app.locals.systemManager = new SystemManager(config);
}

export default loadSystemManager;