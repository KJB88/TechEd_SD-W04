import Database from "better-sqlite3";
export const db = new Database("./guestbook.db");

// DEBUG
/* Purge previous table */
db.exec("DROP TABLE messages");

/* Create Tables */
db.exec(`
CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT NOT NULL,
        message TEXT NOT NULL,
        likes INTEGER DEFAULT 0
      )
`);

/* Populate Tables */
db.prepare(
  `INSERT INTO messages (author, message) VALUES 
  (?, ?)`
).run("Kev", "This is a message.");
