import "module-alias/register";
import express from "express";
import { info } from "@/services/logging";

const app = express();
const port = 8080; // default port to listen

// initialize the application
import bootstrap from '@/loaders';

async function startServer() {
  await bootstrap();

  // define a route handler for the default home page
  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  // start the Express server
  app.listen(port, () => {
    info(`servers started at http://localhost:${port}`, 'loading');
  });
};

startServer();
