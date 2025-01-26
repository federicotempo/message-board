const pool = require("./pool");

async function insertMessage({ text, user }) {
  try {
    await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
      text,
      user,
    ]);
    console.log("Message inserted successfully!");
  } catch (error) {
    console.error("Error inserting message:", error.message);
    throw error;
  }
}

async function selectMessages() {
  try {
    const messages = await pool.query("SELECT * FROM messages");
    return messages.rows;
  } catch (error) {
    console.error("Error selecting messages", error.message);
    throw error;
  }
}

module.exports = {
  insertMessage,
  selectMessages,
};
