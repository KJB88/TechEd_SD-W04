import { db } from "./dbHandler.js";

/* Create Tables */
db.exec(`
CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        body TEXT 
      )
      `);

/* Populate Tables */
db.prepare(
  `INSERT INTO messages (body) VALUES
    (?)`
).run("Hello this is a message.");
