import { Task } from "../models/task";
import { Request, Response } from "express";
import { Types } from "mongoose";

import { ctrlWrapper } from "utils";

const getAllTasks = async (req: Request, res: Response) => {
  res.status(200).json(await Task.find({}));
};

const updateDoneById = async (
  req: Request<{ id: Types.ObjectId }>,
  res: Response
) => {
  const { body, params } = req;
  const { id }: { id: Types.ObjectId } = params;
  res
    .status(200)
    .json(await Task.findByIdAndUpdate({ id, body }, { new: true }));
};

const ctrl = {
  getAllTasks: ctrlWrapper(getAllTasks),
  updateDoneById: ctrlWrapper(updateDoneById),
};

export default ctrl;
