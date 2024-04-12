/* GET ROUTE HANDLING */
/* -------------------- */
// #region IMPORT ACCESSORS
import { getAllMessages } from "./dbHandler.js";

// #endregion IMPORT ACCESSORS
/* -------------------- */
// #region GET ROUTING

export function root() {
  return "Stop hitting root!";
}
/* Get a random number! Ye olde test method! */
export function random() {
  return Math.random();
}

/* Get all messages and stuff them in the response */
export function allMessages() {
  return getAllMessages();
}

// #endregion GET ROUTING
/* -------------------- */
