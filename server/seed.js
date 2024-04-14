import Database from "better-sqlite3";
export const db = new Database("./guestbook.db");

// DEBUG
/* Purge previous table */
db.exec("DROP TABLE IF EXISTS messages");

/* Create Tables */
db.exec(`
CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        message TEXT NOT NULL,
        likes INTEGER DEFAULT 0
      )
`);

/* Populate Tables */
const seedInsert = db.prepare(
  `INSERT INTO messages (name, message) VALUES 
  (?, ?)`
);

seedInsert.run("Kev", "Welcome to my guestbook!");
seedInsert.run("Kev", "It's just me here for now!");
seedInsert.run("MannyLuvr69", "Manny is teh best!!1!");
seedInsert.run("Definitely-Frankie", "Kev is the best!!.");
seedInsert.run("TSmith", "You'll be hearing from my lawyers.");
seedInsert.run("Kev", "I'm still waiting for my McFlurry, Tim.");
