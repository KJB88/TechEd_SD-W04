/* DEL ROUTE HANDLING */
/* -------------------- */
import { deleteMessage } from "./dbHandler.js";

/* Delete a message from the DB by the given id */
export function deleteRequest(requestBody) {
  return deleteMessage(requestBody.id);
}
/* -------------------- */
