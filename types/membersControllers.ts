import { Request } from "express";

export type MemberRequestType = Request & {
  event: {
    eventId: string;
  };
};
