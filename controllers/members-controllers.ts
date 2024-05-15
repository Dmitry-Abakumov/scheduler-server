import { Member } from "../models/member";
import { Response, Request } from "express";

import { ctrlWrapper } from "../utils";
import { HttpError } from "../helpers";

import { MemberRequestType } from "../types/membersControllers";

const getEventMembers = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;

  res.status(200).json(await Member.find({ eventId }));
};

// const updateDoneById = async (
//   req: Request<{ id: Types.ObjectId }>,
//   res: Response
// ) => {
//   const { body, params } = req;
//   const { id } = params;
//   const result = await Task.findByIdAndUpdate(id, body, { new: true });
//   res.status(200).json(result);
// };

const addMember = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;

  const result = await Member.create({ ...req.body, eventId });

  res.status(201).json(result);
};

// const deleteTaskById = async (
//   req: Request<{ id: Types.ObjectId }>,
//   res: Response
// ) => {
//   const { id } = req.params;
//   const result = await Task.findByIdAndDelete(id);
//   if (!result) throw HttpError(404, "Not found");

//   res.status(200).json(result);
// };

const ctrl = {
  getEventMembers: ctrlWrapper(getEventMembers),
  addMember: ctrlWrapper(addMember),
};

export default ctrl;
