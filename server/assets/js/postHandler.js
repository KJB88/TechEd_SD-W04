/* POST ROUTE HANDLING */
/* -------------------- */
import { postMessage } from "./dbHandler.js";

/* Add a new message to the guest book DB. */
export function addNewMessage(requestBody) {
  return postMessage(requestBody.name, requestBody.message);
}
/* -------------------- */
