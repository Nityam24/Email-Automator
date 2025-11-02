import { Router } from "express";
import * as emailController from "../controllers/email.controller";

const router = Router();

// Routes
router.post("/send", emailController.sendEmail);
router.get("/history", emailController.getEmailHistory);

export default router;
