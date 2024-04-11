import { getAllMessagesFromDB } from "./db/dbHandler.js";

/* Get a random number! Ye olde test method! */
export function getRandom(response) {
  return response.json(Math.random());
}

/* Get all messages and stuff them in the response */
export function getAllMessages(request, response) {
  const messages = getAllMessagesFromDB();
  response.json(messages);
}
