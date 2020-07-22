import express from 'express';
import toggleLight from '@/api/routes/toggle-light';

const routes: iRoute[] = [
  toggleLight,
];

type iRoute = (app: express.Application, router: express.Router) => express.Router;

export { iRoute };

export default routes;