import request from 'supertest';
import express, { Application } from 'express';
import loadExpress from '@/loaders/express';
import { Server } from 'http';
import mod from './healthcheck';

let server: Server;
const router = express.Router();
let app: Application;

describe('test the healtcheck', () => {

  beforeAll(async () => {
    app = await loadExpress();
    app.use(mod.route(app, router));

    // start the Express server
    return server = app.listen(5555);
  });

  afterAll(() => {
    server.close();
  });

  it('can get a healthcheck', async () => {
    const { body } = await request(app).get('/healthcheck');
    expect(body.status).toEqual('ok');
  });

  it('healthcheck message is correct', async () => {
    const { body } = await request(app).get('/healthcheck');
    expect(body.message).toEqual('system is online');
  });
});