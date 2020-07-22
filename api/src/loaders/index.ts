import loadExpress from '@/loaders/express';
import { info } from '@/services/logging';

const label = 'bootstrap';

export default async () => {

  info('beginning bootstrap processes', label);

  const app = await loadExpress();

  return app;
}

export { label };