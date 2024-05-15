import { ErrorHandlingMiddlewareFunction } from "mongoose";

import { CustomErrorType } from "../types";

export const handleMongooseError: ErrorHandlingMiddlewareFunction = (
  error: CustomErrorType,
  _,
  next
) => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
};
