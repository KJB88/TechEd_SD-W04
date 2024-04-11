import Database from "better-sqlite3";
//export const db = new Database("./assets/db/guestbook.db");
export const db = new Database("../../db/guestbook.db");

/* Create Tables */
db.exec(`
CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT,
        content TEXT
      )
`);

/* Populate Tables */
db.prepare(
  `INSERT INTO messages (author, content) VALUES 
  (?, ?)`
).run("Kev", "This is a message.");
