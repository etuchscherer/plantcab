import loadExpress from '@/loaders/express';
import loadSystemManager from '@/loaders/systemManager';
import loadEquipment from '@/loaders/equipment';
import { info } from '@/services/logging';

const label = 'bootstrap';

export default async () => {

  info('beginning bootstrap processes', label);

  const app = await loadExpress();

  // must load system manager, before equipment
  loadSystemManager(app);

  // TODO: instansiating something, but it's not
  // configured yet.
  loadEquipment(app);

  return app;
}

export { label };