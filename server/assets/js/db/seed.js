import { db } from "./dbHandler.js";

/* Create Tables */
db.exec(`
CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT,
        message TEXT
      )
`);

/* Populate Tables */
export const insertMessage = db.prepare(
  `INSERT INTO messages (author, message) VALUES
    (?, ?)`
);

insertMessage.run("Kev", "Hello this is a message!");
