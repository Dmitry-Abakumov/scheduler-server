import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import doenv from "dotenv";
import { Request, Response } from "express";

import { IAuthenticateRequest } from "middlewares/authenticate";

import { User } from "models/user";

import { HttpError } from "helpers";

import { ctrlWrapper } from "utils";

doenv.config();

const { SECRET_KEY } = process.env;

const register = async (req: Request, res: Response) => {
  const { login, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) throw HttpError(409, "Email already in use");

  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({ login: result.login, email: result.email });
};

const login = async (req: Request, res: Response) => {
  console.log(SECRET_KEY);
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw HttpError(401, "Email or password invalid");

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) throw HttpError(401, "Email or password invalid");

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY as string, { expiresIn: "23h" });
  const result = await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    login: result?.login,
    email: result?.email,
  });
};

const getCurrent = async (req: IAuthenticateRequest, res: Response) => {
  const { email, login } = req.user;

  res.status(200).json({ login, email });
};

const ctrl = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
};

export default ctrl;
