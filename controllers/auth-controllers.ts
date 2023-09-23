import { Request, Response } from "express";

import { ctrlWrapper } from "utils";

const register = async (req: Request, res: Response) => {};

const login = async () => {};

const ctrl = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};

export default ctrl;
