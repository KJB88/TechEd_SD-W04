import Database from "better-sqlite3";

const db = new Database("guestbook.db");

// EXAMPLE QUERY
db.exec(
  `CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        body TEXT`
);

db.prepare(
  `INSERT INTO messages (body) VALUES
    (?)`
).run("Hello this is a message.");
