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
  return selectAllMessagesQuery.all();
}

/* Add a message to the DB. */
export function insertNewMessage(name, message) {
  insertMessageQuery.run(name, message);
  return selectAllMessagesQuery.all();
}

/* Remove a message from the DB, specified by id */
export function deleteMessage(id) {
  deleteMessageQuery.run(id);
  return selectAllMessagesQuery.all();
}

/* Add a like to a message record, specified by id */
export function updateLikeCount(id) {
  updateMessageLikesQuery.run(id);
  return selectAllMessagesQuery.all();
}

// #endregion DB HANDLING
/* -------------------- */
// #region QUERIES

// Insert a message
const insertMessageQuery = db.prepare(
  `INSERT INTO messages (name, message) VALUES
      (?, ?)`
);

// Select all messages
const selectAllMessagesQuery = db.prepare("SELECT * FROM messages");

// Delete a message by ID
const deleteMessageQuery = db.prepare(`DELETE FROM messages WHERE id = ?`);

// Update the like count on a message by ID
const updateMessageLikesQuery = db.prepare(
  `UPDATE messages SET likes = likes + 1
  WHERE id = ?`
);
// #endregion QUERIES
/* -------------------- */
