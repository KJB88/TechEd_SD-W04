/* PUT ROUTE HANDLING */
/* -------------------- */
import { incrementLikeCount } from "./dbHandler.js";

/* Add a like to a message from the DB by the given id */
export function putLike(requestBody) {
  return incrementLikeCount(requestBody.id);
}
/* -------------------- */
