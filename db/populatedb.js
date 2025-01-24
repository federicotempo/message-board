const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 200 ),
  "user" VARCHAR ( 50 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "user") 
VALUES
  ('Hi there! How are you doing today?', 'Bryan'),
  ('Hello World! This is a great day to learn something new.', 'Odin'),
  ('Good morning! Hope you all have a fantastic day ahead.', 'Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://postgres:fedet9898@localhost:5432/message_board",
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");

    const res = await client.query(SQL);
    console.log("Query executed successfully", res);
  } catch (error) {
    console.error("Error executing the query:", error);
  } finally {
    await client.end();
    console.log("Connection closed");
  }
}

main();
