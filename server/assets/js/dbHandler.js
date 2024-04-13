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
export function postMessage(name, message) {
  insertMessage.run(name, message);
  return selectAllMessages.all();
}

/* Remove a message from the DB, specified by id */
export function removeMessage(id) {
  deleteMessage.run(id);
  return selectAllMessages.all();
}

export function incrementLikeCount(id) {
  updateMessageLikes.run(id);
  return selectAllMessages.all();
}
// #endregion DB HANDLING
/* -------------------- */
// #region QUERIES

const insertMessage = db.prepare(
  `INSERT INTO messages (name, message) VALUES
      (?, ?)`
);

const selectAllMessages = db.prepare("SELECT * FROM messages");

const deleteMessage = db.prepare(`DELETE FROM messages WHERE id = ?`);

const updateMessageLikes = db.prepare(
  `UPDATE messages SET likes = likes + 1
  WHERE id = ?`
);
// #endregion QUERIES
/* -------------------- */
