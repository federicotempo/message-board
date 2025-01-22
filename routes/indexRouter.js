const { Router } = require("express");
indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Welcome to message app");
});

module.exports = indexRouter;
