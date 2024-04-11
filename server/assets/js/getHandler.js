import { selectAllMessages } from "./db/dbHandler.js";

/* Get a random number! Ye olde test method! */
export function getRandom(response) {
  const rand = Math.random();
  return response.json(rand);
}

/* Get all messages and stuff them in the response */
export function getAllMessages(request, response) {
  const messages = selectAllMessages();
  response.json(messages);
}
