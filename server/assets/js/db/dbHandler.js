import Database from "better-sqlite3";
export const db = new Database("guestbook.db");

/* Get all messages in the DB */
export function getMessagesFromDB() {
  return db.prepare("SELECT * FROM messages").all();
}

export function addNewMessage(message) {
  db.prepare(
    `
    INSERT INTO messages (message) VALUES
    (?)`
  ).run(message);
}
