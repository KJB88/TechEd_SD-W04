/* DATABASE HANDLING */
/* -------------------- */
// #region IMPORT & VARS

import Database from "better-sqlite3";

const db = new Database("./guestbook.db");

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

/* Add a like to a message record, specified by id */
export function incrementLikeCount(id) {
  updateMessageLikes.run(id);
  return selectAllMessages.all();
}
// #endregion DB HANDLING
/* -------------------- */
// #region QUERIES

// Insert a message
const insertMessage = db.prepare(
  `INSERT INTO messages (name, message) VALUES
      (?, ?)`
);

// Select all messages
const selectAllMessages = db.prepare("SELECT * FROM messages");

// Delete a message by ID
const deleteMessage = db.prepare(`DELETE FROM messages WHERE id = ?`);

// Update the like count on a message by ID
const updateMessageLikes = db.prepare(
  `UPDATE messages SET likes = likes + 1
  WHERE id = ?`
);
// #endregion QUERIES
/* -------------------- */
