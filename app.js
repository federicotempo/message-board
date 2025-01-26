const express = require("express");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 8000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter")

app.use("/", indexRouter);
app.use("/api", messagesRouter);

app.listen(PORT, () => {
  console.log(`message-board app - listening on port http://localhost:${PORT}`);
});
