const addNewMessage = (messages) => (req, res) => {
  const { author, message } = req.body;
  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });
  res.render("form");
};

module.exports = { addNewMessage };
