/* ELEMENT BUILDER */
/* -------------------- */
// #region IMPORTS

import { deleteMessage } from "./networkHandler.js";
import { putLike } from "./networkHandler.js";

import { onDeleteCallback } from "../../app.js";
import { onPutCallback } from "../../app.js";

// #endregion IMPORTS
/* -------------------- */
// #region VARS

const messageLog = document.getElementById("message-log");
const arrowUpImg = "./assets/img/arrowUp.png";
const crossImg = "./assets/img/cross.png";

const entryTracking = [];

// #endregion VARS
/* -------------------- */
// #region CORE

/* Clear all existing messages from the client */
export function clearEntries() {
  for (let i = 0; i < entryTracking.length; i++) entryTracking[i].remove();
  entryTracking.length = 0;
}
/* Build a new message log from the given data */
export function buildMessage(entries) {
  for (let i = 0; i < entries.length; i++) {
    const entryContainer = document.createElement("div"); // Parent container
    entryContainer.classList.add("entry-container");

    /* Likes */
    entryContainer.appendChild(buildLike(entries[i]));

    /* ID */
    //entryContainer.appendChild(buildID);

    /* Name */
    entryContainer.appendChild(buildName(entries[i]));

    /* Message */
    entryContainer.appendChild(buildMessageBody(entries[i]));

    /* Delete */
    entryContainer.appendChild(buildDeleteBtn(entries[i]));

    messageLog.appendChild(entryContainer); // Append to DOM
    entryTracking.push(entryContainer);
  }
}

// #endregion CORE
/* -------------------- */
// #region BUILDERS

/* Build the ID */
function buildID(entry) {
  const idContainer = document.createElement("span"); // ID
  idContainer.classList.add("drop-shadow-2px", "id-container");
  idContainer.textContent = entry.id;

  return idContainer;
}

/* Build the Like element(s) */
function buildLike(entry) {
  // Parent Div
  const likeDiv = document.createElement("div");
  likeDiv.classList.add("like-div");

  // Text span
  const likeContainer = document.createElement("span"); // Message
  likeContainer.classList.add("like-container");
  likeContainer.textContent = entry.likes;
  likeDiv.appendChild(likeContainer);

  // IMG btn
  const likeBtn = document.createElement("img");
  likeBtn.classList.add("like-btn");
  likeBtn.src = arrowUpImg;
  likeBtn.addEventListener("click", () => {
    putLike(entry.id, onPutCallback);
  });

  likeDiv.appendChild(likeBtn); // Append to parent div

  return likeDiv;
}

/* Build the Name element(s) */
function buildName(entry) {
  const nameContainer = document.createElement("span"); // Name
  nameContainer.classList.add("drop-shadow-2px", "name-container");
  nameContainer.textContent = entry.name;

  return nameContainer;
}

/* Build the Message Body */
function buildMessageBody(entry) {
  const messageContainer = document.createElement("span"); // Message
  messageContainer.classList.add("drop-shadow-2px", "message-container");
  messageContainer.textContent = entry.message;

  return messageContainer;
}

/* Build the delete button */
function buildDeleteBtn(entry) {
  const delBtn = document.createElement("img");
  delBtn.classList.add("del-btn");
  delBtn.src = crossImg;

  delBtn.addEventListener("click", () => {
    deleteMessage(entry.id, onDeleteCallback);
  });
  return delBtn;
}
// #endregion BUILDERS
/* -------------------- */
