/* DATABASE HANDLING */
/* -------------------- */
// #region IMPORT & VARS

import Database from "better-sqlite3";

const db = new Database("./guestbook.db");
//export const db = new Database("../guestbook.db");

// #endregion IMPORT & VARS
/* -------------------- */
// #region DB HANDLING

/* Get all messages in the DB */
export function getAllMessages() {
  return selectAllMessages.all();
}

/* Add a message to the DB. */
export function postMessage(author, message) {
  insertMessage.run(author, message);
}

/* Remove a message from the DB, specified by id */
export function removeMessage(id) {
  deleteMessage.run(id);
}

// #endregion DB HANDLING
/* -------------------- */
// #region QUERIES

const insertMessage = db.prepare(
  `INSERT INTO messages (author, message) VALUES
      (?, ?)`
);

const selectAllMessages = db.prepare("SELECT * FROM messages");

const deleteMessage = db.prepare(`DELETE FROM messages WHERE id = ?`);

const updateMessageLikes = db.prepare("UPDATE messages SET likes = ");
// #endregion QUERIES
/* -------------------- */
