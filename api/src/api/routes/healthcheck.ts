import { Application, Router } from "express";

const route = function(app: Application, router: Router): Router {

  router.get('/healthcheck', (req, res) => {
    res.json({ status: 'ok', message: 'system is online' });
  });

  return router;
}

export default {
  name: 'healthcheck',
  route
}