import { ErrorHandlingMiddlewareFunction } from "mongoose";

import { ICustomError } from "Types";

export const handleMongooseError: ErrorHandlingMiddlewareFunction = (
  error: ICustomError,
  _,
  next
) => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
};
