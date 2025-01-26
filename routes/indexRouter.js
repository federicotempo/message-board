const { Router } = require("express");
const {
  addNewMessage,
  renderIndexPage,
  renderForm,
  validateMessage
} = require("../controllers/formController");

indexRouter = Router();

indexRouter.get("/", renderIndexPage);

indexRouter.get("/new", renderForm);
indexRouter.post("/new", validateMessage, addNewMessage);

module.exports = indexRouter;
