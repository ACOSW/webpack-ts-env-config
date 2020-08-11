import express from "express";
import { EXPRESS_PORT, EXPRESS_HOST } from "config";

const app: express.Application = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.listen(EXPRESS_PORT, EXPRESS_HOST, () => {
  console.log(`Server running on port ${EXPRESS_HOST}:${EXPRESS_PORT}`);
});
