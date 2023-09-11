import { Request, Response, NextFunction } from "express";

type Ctrl = (
  req: Request<any>,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const ctrlWrapper = (ctrl: Ctrl): Ctrl => {
  const fn: Ctrl = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (err) {
      next(err);
    }
  };

  return fn;
};
