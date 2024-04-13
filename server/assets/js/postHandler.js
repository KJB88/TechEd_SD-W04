/* GET ROUTE HANDLING */
/* -------------------- */
// #region IMPORTS

import { postMessage } from "./dbHandler.js";

// #endregion IMPORTS
/* -------------------- */
// #region POST ROUTING

/* Add a new message to the guest book DB. */
export function addNewMessage(requestBody) {
  return postMessage(requestBody.author, requestBody.message);
}

// #endregion POST ROUTING
/* -------------------- */
