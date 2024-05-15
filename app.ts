import express, { Express } from "express";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

import eventsRouter from "./routes/api/event";
import membersRouter from "./routes/api/members";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);
app.use("/api/members", membersRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
