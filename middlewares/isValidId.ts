import { isValidObjectId, Types } from "mongoose";
import { Request, Response, NextFunction } from "express";

import { HttpError } from "../helpers";

export const isValidId = (
  req: Request<{ id: Types.ObjectId }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(404, `${id} invalid format`));
  }

  next();
};
