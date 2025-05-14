import "dotenv/config";
import express from "express";
import { PORT, NODE_ENV } from "./constants/env.js";
import routes from "./routes/index.js";

const app = express();

app.use("/api", routes);

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
