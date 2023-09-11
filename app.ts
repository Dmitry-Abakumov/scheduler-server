import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import tasksRouter from "routes/api/tasks";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRouter);

export default app;
