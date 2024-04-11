import express from "express";
import cors from "cors";

// Get Routing
import { getAllMessages } from "./getHandler.js";
import { getRandom } from "./getHandler.js";

// Post Routing
//import postHandler from "./postHandler.js";

/* Set up server with necessary technologies */
const app = express();
app.use(cors());
app.use(express.json());

/* Root */
app.get("/", function (request, response) {
  console.log("/ is called!");
  response.json("Hitting root route. Stop it.");
});

/* Get random number */
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
