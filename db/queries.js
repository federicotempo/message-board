const pool = require("./pool");

async function insertMessage({ text, user, country }) {
  try {
    await pool.query('INSERT INTO messages (text, "user", country) VALUES ($1, $2, $3)', [
      text,
      user,
      country,
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
    console.log("Messages selected successfully:", messages.rows);
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
