/* CLIENT ENTRY POINT */
/* -------------------- */
// #region IMPORTS

import { buildMessage } from "./assets/js/elementFactory.js";
import { clearEntries } from "./assets/js/elementFactory.js";

import { getMessages } from "./assets/js/networkHandler.js";
import { postMessage } from "./assets/js/networkHandler.js";

// #endregion IMPORTS
/* -------------------- */
// #region VARS

const inputForm = document.getElementById("input-form");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");

// #endregion VARS
/* -------------------- */
// #region HOOKS

// Initialize app when DOM loaded
window.onload = () => {
  clearEntries();
  getMessages(buildMessage);
};

// Stop ENTER from submitting and instead skip to next
nameInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") messageInput.focus();
});

// Submit handling
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation(); // Consume event
  readFormData(e);
  console.log("SUBMIT");
});

// #endregion HOOKS
/* -------------------- */
// #region FORBIDDEN MAGIC

function readFormData(submitEvent) {
  const formData = new FormData(submitEvent.target);
  const values = Object.fromEntries(formData);

  postMessage(values, onPostCallback);
  nameInput.value = "";
  messageInput.value = "";
}

function onPostCallback(data) {
  clearEntries();
  buildMessage(data);
}

export function onDeleteCallback(data) {
  clearEntries();
  buildMessage(data);
}

export function onPutCallback(data) {
  clearEntries();
  buildMessage(data);
}
// #endregion FORBIDDEN MAGIC
/* -------------------- */
