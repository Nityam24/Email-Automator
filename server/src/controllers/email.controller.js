const Email = require("../models/email.model");

// Store email history in memory (replace with database in production)
const emailHistory = [];

const sendEmail = async (req, res) => {
  try {
    const { to, subject, body, attachments } = req.body;

    // Create new email
    const email = new Email(to, subject, body, attachments);

    // TODO: Implement actual email sending logic here

    // Simulate successful email sending
    email.markAsSent();
    emailHistory.push(email);

    res.status(200).json({
      message: "Email sent successfully",
      email,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Failed to send email",
      error: error.message,
    });
  }
};

const getEmailHistory = (req, res) => {
  try {
    res.status(200).json({
      message: "Email history retrieved successfully",
      history: emailHistory,
    });
  } catch (error) {
    console.error("Error retrieving email history:", error);
    res.status(500).json({
      message: "Failed to retrieve email history",
      error: error.message,
    });
  }
};

module.exports = {
  sendEmail,
  getEmailHistory,
};
