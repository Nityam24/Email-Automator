class Email {
  constructor(to, subject, body, attachments = []) {
    this.to = to;
    this.subject = subject;
    this.body = body;
    this.attachments = attachments;
    this.sentAt = null;
    this.status = "pending";
  }

  markAsSent() {
    this.sentAt = new Date();
    this.status = "sent";
  }

  markAsFailed() {
    this.status = "failed";
  }
}

module.exports = Email;
