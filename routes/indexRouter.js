const { Router } = require("express");
const {
  addNewMessage,
  showMessage,
  renderForm,
  validateMessage
} = require("../controllers/formController");

indexRouter = Router();

indexRouter.get("/", showMessage);

indexRouter.get("/new", renderForm);

indexRouter.post("/new", validateMessage, addNewMessage);

module.exports = indexRouter;
