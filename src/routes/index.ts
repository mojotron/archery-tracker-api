import { Router } from "express";
import catchErrors from "../utils/catchErrors";

const routes = Router();

routes.get(
  "/health",
  catchErrors(async (req, res) => {
    throw new Error("test error");
    res.status(200).json({ message: "hello" });
  })
);

export default routes;
