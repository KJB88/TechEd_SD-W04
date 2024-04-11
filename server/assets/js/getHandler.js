import { getAllMessages } from "./db/dbHandler.js";

export function root() {
  console.log("/ was called.");
  return "Stop hitting root!";
}
/* Get a random number! Ye olde test method! */
export function random() {
  return Math.random();
}

/* Get all messages and stuff them in the response */
export function allMessages() {
  const messages = getAllMessages();
  return messages;
}
