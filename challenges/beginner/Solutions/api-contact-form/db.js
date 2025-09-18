const Database = require("better-sqlite3");
const db = new Database("mi-app.db");

const initDB = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT
    );
  `;
  db.exec(sql);
};

const insertContact = (name, email, message) => {
  try {
    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    const stmt = db.prepare(sql);
    stmt.run(name, email, message);
    return { name, email, message };
  } catch (error) {
    console.error("Error inserting contact:", error);
    throw error;
  }
};

module.exports = {
  initDB,
  insertContact,
};
