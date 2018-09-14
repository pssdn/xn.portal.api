import express from "express";

import * as core from "./portal.api.mjs";

export const portalWebAPI = express.Router({ mergeParams: true });

portalWebAPI.get("/", async (request, response) => {
  const { client } = request.params;

  const portal = await core.loadPortal({ clientID: client });

  response.json(portal);
});
