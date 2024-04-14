/* POST ROUTE HANDLING */
/* -------------------- */
import { insertNewMessage } from "./dbHandler.js";

/* Add a new message to the guest book DB. */
export function postNewMessageRequest(requestBody) {
  return insertNewMessage(requestBody.name, requestBody.message);
}
/* -------------------- */
