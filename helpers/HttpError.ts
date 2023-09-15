import { ICustomError } from "Types";

const errorMessages = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

export const HttpError = (
  status: number,
  message = errorMessages[status]
): ICustomError => {
  const error: ICustomError = new Error(message);
  error.status = status;

  return error;
};
