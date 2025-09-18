const routes = require("express").Router();
const { insertContact } = require("./db");

routes.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form data:", { name, email, message });

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required" });
  }

  try {
    insertContact(name, email, message);
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
