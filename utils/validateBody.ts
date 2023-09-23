import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";

import { HttpError } from "helpers";

const validateBody = (schema: Schema) => {
  const fn = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) next(HttpError(400, error.message));

    next();
  };

  return fn;
};

module.exports = validateBody;
