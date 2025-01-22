const addNewMessage = (messages) => (req, res) => {
  const { author, message } = req.body;
  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { addNewMessage };
