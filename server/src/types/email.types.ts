export interface IEmail {
  to: string;
  subject: string;
  body: string;
  attachments?: string[];
  sentAt: Date | null;
  status: "pending" | "sent" | "failed";
}

export interface EmailResponse {
  message: string;
  email?: IEmail;
  error?: string;
}

export interface HistoryResponse {
  message: string;
  history?: IEmail[];
  error?: string;
}
