import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http.js";
import { z } from "zod";

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({ message: error.message, errors });
};

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH ${req.path}`, error);

  if (error instanceof z.ZodError) {
    handleZodError(res, error);
    return;
  }
  res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
  return;
};

export default errorHandler;
