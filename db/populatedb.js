const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 200 ),
  "user" VARCHAR ( 50 ),
  country VARCHAR ( 50 ), -- Nueva columna para el país
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "user", country) 
VALUES
  ('Hi there! How are you doing today?', 'Bryan', 'US'),
  ('Hello World! This is a great day to learn something new.', 'Odin', 'NO'),
  ('Good morning! Hope you all have a fantastic day ahead.', 'Damon', 'GB');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://koyeb-adm:npg_LGdWS8Ux4jpv@ep-royal-frog-a2bgp2s2.eu-central-1.pg.koyeb.app:5432/koyebdb?sslmode=require",
    ssl: {
      rejectUnauthorized: false,
    },
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
