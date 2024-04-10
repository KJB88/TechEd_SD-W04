import { app } from "./server.js";

// EXAMPLE POST
app.post("/message", function (request, response) {
  const newMessage = request.body;
  console.log(newMessage);
  response.json(newMessage);
});
