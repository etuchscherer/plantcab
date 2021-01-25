import { Application, Router } from 'express';

const route = function(app: Application, router: Router): Router {

  router.get('/toggle-light', (req, res) => {
    res.json({ ok: 8 });
  });

  return router;
}

export default {
  name: 'toggleLight',
  route
}