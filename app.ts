import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks");

export default app;
