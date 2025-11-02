const express = require("express");
const router = express.Router();
const emailController = require("../controllers/email.controller");

// Routes
router.post("/send", emailController.sendEmail);
router.get("/history", emailController.getEmailHistory);

module.exports = router;
