const db = require("../db/queries");
const geoip = require("geoip-lite");
const { check, validationResult } = require("express-validator");

const validateMessage = [
  check("text")
    .trim()
    .notEmpty()
    .withMessage("Text is required")
    .isLength({ max: 200 })
    .withMessage("Text cannot be longer than 200 characters"),
  check("user")
    .trim()
    .notEmpty()
    .withMessage("User is required")
    .isLength({ max: 50 })
    .withMessage("User cannot be longer than 50 characters"),
];

async function addNewMessage(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const message = req.body;

    if (!message.text || !message.user) {
      return res.status(400).send("Both 'text' and 'user' are required.");
    }

    let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("Original IP Address:", ip);

    if (ip === "::1" || ip === "127.0.0.1") {
      ip = "8.8.8.8";
    }

    console.log("IP Address for Geo Lookup:", ip);
    const geo = geoip.lookup(ip);
    console.log("Geo Info:", geo);
    const country = geo ? geo.country : "Unknown";
    console.log("Country:", country);

    await db.insertMessage({ ...message, country });
    res.redirect("/");
  } catch (error) {
    console.error("Error adding new message:", error.message);
    res.status(500).send("An error occurred while adding the message.");
  }
}

async function getMessages(req, res) {
  try {
    const messages = await db.selectMessages();
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching messages." });
  }
}

const renderForm = (req, res) => {
  res.render("form");
};

async function renderIndexPage(req, res) {
  res.render("index");
}

module.exports = {
  addNewMessage,
  renderForm,
  renderIndexPage,
  getMessages,
  validateMessage,
};
