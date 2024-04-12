/* DEL ROUTE HANDLING */
/* -------------------- */
// #region IMPORT ACCESSORS

import { removeMessage } from "./dbHandler.js";

// #endregion IMPORT ACCESSORS
/* -------------------- */
// #region DEL ROUTING

export function deleteMessage(request) {
  removeMessage(1);
}
// #endregion DEL ROUTING
/* -------------------- */
