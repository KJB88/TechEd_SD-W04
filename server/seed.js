import Database from "better-sqlite3";
export const db = new Database("./guestbook.db");

// DEBUG
/* Purge previous table */
db.exec("DROP TABLE IF EXISTS messages");

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
const seedInsert = db.prepare(
  `INSERT INTO messages (author, message) VALUES 
  (?, ?)`
);

seedInsert.run("Kev", "This is a message.");
seedInsert.run("Kev", "There's no one here besides me!");
seedInsert.run("MannyLuvr69", "wat a nerd lol");
