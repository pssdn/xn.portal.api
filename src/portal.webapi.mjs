import express from "express";

import * as core from "./portal.api.mjs";

export const portalWebAPI = express.Router({ mergeParams: true });

portalWebAPI.get("/", async (request, response) => {
  let { client } = request.params;

  if (response.locals.client) {
    client = response.locals.client;
  }

  const portal = await core.loadPortal({ clientID: client });

  response.json(portal);
});
