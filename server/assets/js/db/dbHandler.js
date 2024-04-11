import Database from "better-sqlite3";
export const db = new Database("./assets/db/guestbook.db");
//export const db = new Database("../../db/guestbook.db");

/* Get all messages in the DB */
export function getAllMessages() {
  return selectAllMessages();
}

export function postMessage(author, message) {
  insertMessage.run(`${author}, ${message}`);
}

/* */
const insertMessage = db.prepare(
  `INSERT INTO messages (author, content) VALUES
      (?, ?)`
);

const selectAllMessages = db.prepare("SELECT * FROM messages").all();
