import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

import { HttpError } from "../helpers";

export const validateBody = (schema: ObjectSchema) => {
  const fn = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return fn;
};
