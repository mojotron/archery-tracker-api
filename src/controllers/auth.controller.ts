import catchErrors from "../utils/catchErrors.js";
import { registerSchema } from "./auth.schema.js";

export const registerHandler = catchErrors(async (req, res) => {
  const request = registerSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });
});
