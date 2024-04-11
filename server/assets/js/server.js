import express from "express";

export const app = express();
app.use(express.json());

/* Root */
app.get("/", function (request, response) {
  console.log("/ is called!");
  response.json("Hitting root route. Stop it.");
});

app.listen(8080, function () {
  console.log("Listening on 8080.");
});

/* TEST */
// EXAMPLE GET
app.get("/random", function (request, response) {
  response.json(Math.random());
});

/* Get all messages and stuff them in the response */
app.get("/messages", function (request, response) {
  const messages = getAllMessages();
  response.json(messages);
});
