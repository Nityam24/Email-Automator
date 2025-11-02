import { IEmail } from "../types/email.types";

class Email implements IEmail {
  public to: string;
  public subject: string;
  public body: string;
  public attachments: string[];
  public sentAt: Date | null;
  public status: "pending" | "sent" | "failed";

  constructor(
    to: string,
    subject: string,
    body: string,
    attachments: string[] = []
  ) {
    this.to = to;
    this.subject = subject;
    this.body = body;
    this.attachments = attachments;
    this.sentAt = null;
    this.status = "pending";
  }

  public markAsSent(): void {
    this.sentAt = new Date();
    this.status = "sent";
  }

  public markAsFailed(): void {
    this.status = "failed";
  }
}

export default Email;
