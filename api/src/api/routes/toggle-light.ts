import { iRoute } from '@/api/routes';

const route: iRoute = (app, router) => {

  router.get('/toggle-light', (req, res) => {
    res.json({ ok: 8 });
  });

  return router;
}

export default route;