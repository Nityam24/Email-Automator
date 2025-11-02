import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import emailRoutes from "./routes/email.routes";

dotenv.config();

const app: Express = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Use routes
app.use("/api/email", emailRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Default route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Email Automator API" });
});

const PORT: number = parseInt(process.env.PORT || "5000", 10);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
