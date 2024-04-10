import { app } from "./server.js";
import { getAllMessages } from "./db/dbHandler.js";

// EXAMPLE GET
app.get("/random", function (request, response) {
  response.json(Math.random());
});

/* Get all messages and stuff them in the response */
app.get("/messages", function (request, response) {
  const messages = getAllMessages();
  response.json(messages);
});
