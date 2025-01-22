const { Router } = require("express");
const { addNewMessage } = require("../controllers/formController");

indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", addNewMessage(messages));

module.exports = indexRouter;
