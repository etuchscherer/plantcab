import * as express from 'express';
import SystemManager from '@/services/systemManager';
import { info } from '@/services/logging';
import { OUTPUT, LOW } from '@/services/board';

const label = 'bootstrap';

const loadSystemManager = (app: express.Application): express.Application => {

  info('instansiating the System Manager', label);
  const systemManager = new SystemManager();

  info('setting up pin 15 ', label);
  systemManager.board.initPin(15, OUTPUT, LOW);

  info('completed initializing pins', label);

  app.locals.systemManager = systemManager;

  return app;
}

export default loadSystemManager;