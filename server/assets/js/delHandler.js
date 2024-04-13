/* DEL ROUTE HANDLING */
/* -------------------- */
// #region IMPORT ACCESSORS

import { removeMessage } from "./dbHandler.js";

// #endregion IMPORT ACCESSORS
/* -------------------- */
// #region DEL ROUTING

export function deleteMessage(requestBody) {
  return removeMessage(requestBody.id);
}
// #endregion DEL ROUTING
/* -------------------- */
