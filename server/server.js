/* SERVER HANDLING */
/* -------------------- */
// #region IMPORTS

// Get libs
import express from "express";
import cors from "cors";

// Get Routing
import { allMessages } from "./assets/js/getHandler.js";
import { random } from "./assets/js/getHandler.js";
import { root } from "./assets/js/getHandler.js";

// Post Routing
import { addNewMessage } from "./assets/js/postHandler.js";

// Del Routing
import { deleteMessage } from "./assets/js/delHandler.js";

// #endregion IMPORTS
/* -------------------- */
// #region CONFIG

/* Set up server with necessary technologies */
const app = express();
app.use(cors());
app.use(express.json());

/* Good people, lend me your ears! */
app.listen(8080, function () {
  console.log("Listening on 8080.");
});

// #endregion CONFIG
/* -------------------- */
// #region GET ROUTING

/* Root */
app.get("/", function (request, response) {
  console.log(`GET: ${request.body}`);
  response.json(root());
});

/* (TEST) Get random number */
app.get("/random", (request, response) => {
  console.log(`GET: ${request.body}`);
  response.json(random());
});

/* Get messages */
app.get("/messages", (request, response) => {
  console.log(`GET: ${request.body}`);
  response.json(allMessages());
});

// #endregion GET ROUTING
/* -------------------- */
// #region POST ROUTING

app.post("/message", (request, response) => {
  console.log(`POST: ${request.body}`);
  addNewMessage(request.body);
  response.send();
});

app.delete("/message", (request, response) => {
  console.log(`DEL: ${request.body}`);
  deleteMessage(request.body);
  // TODO: POST STUFF
});

app.put("/message", (request, response) => {
  console.log(`PUT: ${request.body}`);
  // TODO: POST STUFF
});
// #endregion POST ROUTING
/* -------------------- */
