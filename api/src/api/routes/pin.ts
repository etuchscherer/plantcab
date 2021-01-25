import { Application, Router, Request, Response, NextFunction } from 'express';
import { info } from '@/services/logging';
import Board from '@/services/board';
import SystemManager from '@/services/systemManager';

const label = 'pin-route';

const route = function (app: Application, router: Router): Router {
  router.get('/pin/:id', common, getPin);
  router.post('/pin/:id/:state', common, setPin);

  return router;
}

export const common = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url } = req;
  info(`${method} ${url}`, label);

  return next();
}

export const getPin = (req: Request, res: Response): Response => {
  const { id, board } = readRequest(req);
  const pin = board.readPin(+id);

  res.json({ pin });
  return res;
}

export const setPin = (req: Request, res: Response): Response => {
  const { id, state, board } = readRequest(req);
  const pin = board.writePin(+id, +state);

  res.json({ pin });
  return res;
}

function readRequest(req: Request): { id: string, state: string, systemManager: SystemManager, board: Board } {
  const { id, state } = req.params;
  const { systemManager } = req.app.locals;
  const { board } = systemManager;

  return {
    id,
    state,
    systemManager,
    board
  };
}

export default {
  name: 'pin',
  route
}