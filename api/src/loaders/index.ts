import loadExpress from '@/loaders/express';
import loadSystemManager from '@/loaders/systemManager';
import loadRoutes from '@/loaders/routes';
import { info } from '@/services/logging';
import { Application } from 'express';

const label = 'bootstrap';

export default async (): Promise<Application> => {

  info('beginning bootstrap processes', label);

  const app = await loadExpress();

  // TODO :: get the board working first
  // we must load the system manager
  // before we load the routes
  info('calling system manager loader', label);
  loadSystemManager(app);

  // we must load the routes, after app-wide
  // context and state has been loaded
  info('calling route loader', label);
  loadRoutes(app);

  return app;
}

export { label };