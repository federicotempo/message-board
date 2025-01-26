const { Router } = require("express");
const { getMessages } = require("../controllers/formController")

const messagesRouter = Router();

messagesRouter.get("/messages", getMessages);

module.exports = messagesRouter;