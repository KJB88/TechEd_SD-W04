import express from "express";
import cors from "cors";
import { getAllMessages, getRandom } from "./getHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

/* Root */
app.get("/", function (request, response) {
  console.log("/ is called!");
  response.json("Hitting root route. Stop it.");
});

/* Get messages */
app.get("/random", (request, response) => {
  getRandom(response);
});

/* Get messages */
app.get("/messages", (request, response) => {
  getAllMessages(request, response);
});

/* Good people, lend me your ears! */
app.listen(8080, function () {
  console.log("Listening on 8080.");
});
