import 'module-alias/register';
import { info } from '@/services/logging';

const port = 8080; // default port to listen
const label = 'loading';

// initialize the application
import bootstrap from '@/loaders';

info(`starting server on port ${port}`, label);

async function startServer() {
  const app = await bootstrap();

  // start the Express server
  app.listen(port, () => {
    info(`servers started at http://localhost:${port}`, label);
  });
};

startServer();
