import { app } from "./server.js";

// EXAMPLE GET
app.get("/random", function (request, response) {
  response.json(Math.random());
});
