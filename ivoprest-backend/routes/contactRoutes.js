const express = require("express");
const { createContact } = require("../controllers/contactController");

const router = express.Router();

// Route POST pour recevoir un message
router.post("/", createContact);

module.exports = router;
