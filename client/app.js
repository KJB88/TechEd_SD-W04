/* CLIENT ENTRY POINT */
/* -------------------- */
// #region IMPORTS

import { buildMessage } from "./assets/js/elementFactory.js";

// #endregion IMPORTS
/* -------------------- */
// #region VARS

const inputForm = document.getElementById("input-form");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");

// #endregion VARS
/* -------------------- */
// #region HOOKS

/* Submit handling */
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
  // TODO: POST
});

/* Pressing ENTER to submit because I'm lazy. */
inputForm.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (e.key == "Enter") console.log("enter");
  // TODO: POST
});

// #endregion HOOKS
/* -------------------- */
// #region FORBIDDEN MAGIC

buildMessage([{ id: "1", name: "Kev", message: "Blah blah blah!" }]);

// #endregion FORBIDDEN MAGIC
/* -------------------- */
