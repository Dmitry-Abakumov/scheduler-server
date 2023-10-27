import { Task } from "../models/task";
import { Request, Response } from "express";
import { Types } from "mongoose";

import { ctrlWrapper } from "utils";
import { HttpError } from "helpers";

import { IAuthenticateRequest } from "middlewares/authenticate";

const getAllTasks = async (req: IAuthenticateRequest, res: Response) => {
  const { id: owner } = req.user;
  const { done } = req.query;

  res
    .status(200)
    .json(
      await Task.find(done ? { done, owner } : { owner }).populate(
        "owner",
        "email"
      )
    );
};

const updateDoneById = async (
  req: Request<{ id: Types.ObjectId }>,
  res: Response
) => {
  const { body, params } = req;
  const { id } = params;
  const result = await Task.findByIdAndUpdate(id, body, { new: true });
  res.status(200).json(result);
};

const addTask = async (req: IAuthenticateRequest, res: Response) => {
  const { id: owner } = req.user;

  const result = await Task.create({ ...req.body, owner });

  res.status(201).json(result);
};

const deleteTaskById = async (
  req: Request<{ id: Types.ObjectId }>,
  res: Response
) => {
  const { id } = req.params;
  const result = await Task.findByIdAndDelete(id);
  if (!result) throw HttpError(404, "Not found");

  res.status(200).json(result);
};

const ctrl = {
  getAllTasks: ctrlWrapper(getAllTasks),
  updateDoneById: ctrlWrapper(updateDoneById),
  deleteTaskById: ctrlWrapper(deleteTaskById),
  addTask: ctrlWrapper(addTask),
};

export default ctrl;
