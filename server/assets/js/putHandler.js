/* PUT ROUTE HANDLING */
/* -------------------- */
import { updateLikeCount } from "./dbHandler.js";

/* Add a like to a message from the DB by the given id */
export function putLikeRequest(requestBody) {
  return updateLikeCount(requestBody.id);
}
/* -------------------- */
