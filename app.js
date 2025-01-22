const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`message-board app - listening on port http://localhost:${PORT}`);
});
