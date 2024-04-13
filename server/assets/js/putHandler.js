/* PUT ROUTE HANDLING */
/* -------------------- */
// #region IMPORT ACCESSORS

import { incrementLikeCount } from "./dbHandler.js";

// #endregion IMPORT ACCESSORS
/* -------------------- */
// #region PUT ROUTING

export function putLike(requestBody) {
  return incrementLikeCount(requestBody.id);
}
// #endregion PUT ROUTING
/* -------------------- */
