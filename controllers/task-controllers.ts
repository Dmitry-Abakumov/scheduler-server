import { Task } from "../models/task";
import { Request, Response, NextFunction } from "express";

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tasks = await Task.find({});

  res.status(200);
};
