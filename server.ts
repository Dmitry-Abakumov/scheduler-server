import mongoose from "mongoose";
import doenv from "dotenv";

import app from "./app";

doenv.config();

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST!)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
