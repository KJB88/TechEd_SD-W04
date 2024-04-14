/* SERVER HANDLING */
/* -------------------- */
// #region IMPORTS

// Get libs
import express from "express";
import cors from "cors";

// GET Routing
import { getAllMessagesRequest } from "./assets/js/getHandler.js";
import { getRandomRequest } from "./assets/js/getHandler.js";
import { rootRequest } from "./assets/js/getHandler.js";

// POST Routing
import { postNewMessageRequest } from "./assets/js/postHandler.js";

// DEL Routing
import { deleteRequest } from "./assets/js/delHandler.js";

// PUT Routing
import { putLikeRequest } from "./assets/js/putHandler.js";

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
  response.json(rootRequest());
});

/* (TEST) Get random number */
app.get("/random", (request, response) => {
  console.log(`GET: ${request.body}`);
  response.json(getRandomRequest());
});

/* Get messages */
app.get("/message", (request, response) => {
  console.log(`GET: ${request.body}`);
  response.json(getAllMessagesRequest());
});

// #endregion GET ROUTING
/* -------------------- */
// #region POST ROUTING

app.post("/message", (request, response) => {
  console.log(`POST: ${request.body}`);
  response.json(postNewMessageRequest(request.body));
});

// #endregion POST ROUTING
/* -------------------- */
// #region DEL ROUTING

app.delete("/message", (request, response) => {
  console.log(`DEL: ${request.body}`);
  response.json(deleteRequest(request.body));
});

// #endregion DEL ROUTING
/* -------------------- */
// #region PUT ROUTING

app.put("/like", (request, response) => {
  console.log(`PUT: ${request.body}`);
  response.json(putLikeRequest(request.body));
});

// #endregion PUT ROUTING
/* -------------------- */
