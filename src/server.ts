import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT, NODE_ENV, APP_ORIGIN } from "./constants/env.js";
import routes from "./routes/index.route.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/v1", routes);
app.use(errorHandler);

const startServer = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`server running on port ${PORT} in ${NODE_ENV} environment`)
    );
  } catch (error) {
    process.exit(1);
  }
};

startServer();
