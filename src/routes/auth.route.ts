import { Router } from "express";
import {
  registerHandler,
  loginHandler,
  logoutHandler,
} from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/register", registerHandler);
authRoutes.post("/login", registerHandler);
authRoutes.post("/logout", registerHandler);
authRoutes.post("/password/reset", registerHandler);

export default authRoutes;
