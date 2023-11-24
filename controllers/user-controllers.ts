import { Request, Response } from "express";

import { IAuthenticateRequest } from "middlewares/authenticate";

import { User } from "models/user";

export const updateDisplayMode = async (
  req: IAuthenticateRequest,
  res: Response
) => {
  const { id: owner } = req.user;
  const { displayMode } = req.body;
  const response = await User.findByIdAndUpdate(
    owner,
    { displayMode },
    { new: true }
  );

  res.json({ displayMode: response?.displayMode });
};
