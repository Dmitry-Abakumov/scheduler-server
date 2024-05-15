import { Response } from "express";

import { Event } from "../models/event";

export const getAllEvents = async (_, res: Response) => {
  res.status(200).json(await Event.find());
};
