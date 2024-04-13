/* DEL ROUTE HANDLING */
/* -------------------- */
import { removeMessage } from "./dbHandler.js";

/* Delete a message from the DB by the given id */
export function deleteMessage(requestBody) {
  return removeMessage(requestBody.id);
}
/* -------------------- */
