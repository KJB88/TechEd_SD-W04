import Database from "better-sqlite3";
export const db = new Database("../../db/guestbook.db");

/* Get all messages in the DB */
export function getAllMessagesFromDB() {
  return db.prepare("SELECT * FROM messages").all();
}

export function addNewMessage(author, message) {}
