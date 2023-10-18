import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

import { User } from "models/user";

import { HttpError } from "helpers";

dotenv.config();

const { SECRET_KEY } = process.env;

export interface IAuthenticateRequest extends Request {
  user: {
    login: string;
    email: string;
    id?: string;
  };
}

export const authenticate = async (
  req: IAuthenticateRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") next(HttpError(401));

  try {
    const { id } = jwt.verify(token, SECRET_KEY as string) as JwtPayload;

    const user = await User.findById(id);

    if (!user || !user.token) throw HttpError(401);

    req.user = { email: user.email, login: user.login, id };
    next();
  } catch {
    next(HttpError(401));
  }
};
