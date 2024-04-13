/* GET ROUTE HANDLING */
/* -------------------- */
import { getAllMessages } from "./dbHandler.js";

/* GET root handling */
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
/* -------------------- */
