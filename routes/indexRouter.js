const { Router } = require("express");
const { addNewMessage } = require("../controllers/formController");
const messages = require("../db")

indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", addNewMessage(messages));

module.exports = indexRouter;
