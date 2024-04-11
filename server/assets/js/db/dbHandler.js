import Database from "better-sqlite3";
export const db = new Database("./assets/db/guestbook.db");
//export const db = new Database("../../db/guestbook.db");

/* Get all messages in the DB */
export function selectAllMessages() {
  return db.prepare("SELECT * FROM messages").all();
}

export function insertMessage(author, message) {}
