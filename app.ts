import express, { Express } from "express";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

import tasksRouter from "routes/api/tasks";
import authRouter from "routes/api/auth";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("api/auth", authRouter);
app.use("/api/tasks", tasksRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
