import { Application, Router } from "express";

const route = function (app: Application, router: Router): Router {

  router.get('/pin/:id', (req, res) => {
    const { id } = req.params;

    const { board } = res.locals.systemManager;

    console.log('board :: ', board, id);

    res.json({ ok: 8 });
  });

  return router;
}

export default {
  name: 'pin',
  route
}