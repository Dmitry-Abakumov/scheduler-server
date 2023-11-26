import { Request, Response } from "express";

import { IAuthenticateRequest } from "middlewares/authenticate";

import { User } from "models/user";

export const getCurrentDisplayMode = async (
  req: IAuthenticateRequest,
  res: Response
) => {
  const { id } = req.user;
  const response = await User.findById(id);

  res.json({ displayMode: response?.displayMode });
};

export const updateDisplayMode = async (
  req: IAuthenticateRequest,
  res: Response
) => {
  const { id } = req.user;
  const { displayMode } = req.body;
  const response = await User.findByIdAndUpdate(
    id,
    { displayMode },
    { new: true }
  );

  res.json({ displayMode: response?.displayMode });
};
