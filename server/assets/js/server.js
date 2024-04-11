/* SERVER HANDLING */
/* -------------------- */
/* #region Imports */

// Get libs
import express from "express";
import cors from "cors";

// Get Routing
import { allMessages } from "./getHandler.js";
import { random } from "./getHandler.js";

// Post Routing
//import postHandler from "./postHandler.js";

/* #endregion Imports */
/* -------------------- */
/* #region Config */

/* Set up server with necessary technologies */
const app = express();
app.use(cors());
app.use(express.json());

/* #endregion Config */
/* -------------------- */
/* #region Config */

/* Root */
app.get("/", function (request, response) {
  console.log(`GET: ${request.body}`);
  response.json(root());
});

/* Get random number */
app.get("/random", (request, response) => {
  console.log(`GET: ${request.body}`);
  response.json(random());
});

/* Get messages */
app.get("/messages", (request, response) => {
  console.log(`GET: ${request.body}`);
  response.json(allMessages());
});

/* Good people, lend me your ears! */
app.listen(8080, function () {
  console.log("Listening on 8080.");
});
