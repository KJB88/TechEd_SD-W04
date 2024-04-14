/* GET ROUTE HANDLING */
/* -------------------- */
import { getAllMessages } from "./dbHandler.js";

/* GET root handling */
export function rootRequest() {
  return "Stop hitting root!";
}
/* Get a random number! Ye olde test method! */
export function getRandomRequest() {
  return Math.random();
}

/* Get all messages and stuff them in the response */
export function getAllMessagesRequest() {
  return getAllMessages();
}
/* -------------------- */
