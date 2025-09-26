const express = require("express");
const { saveContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact", saveContact);

module.exports = router;
