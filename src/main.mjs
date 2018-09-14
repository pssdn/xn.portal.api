import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { portalWebAPI } from "./portal.webapi.mjs";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json({ service: "xn.portal.api" });
});

app.use("/:client/portal", portalWebAPI);

const port = 10000;

app.listen(process.env.PORT || port, () =>
  global.console.log(`Listening on port ${port}!`)
);
