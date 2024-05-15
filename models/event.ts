import { Schema, model, InferSchemaType } from "mongoose";

import { handleMongooseError } from "../utils";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    eventDate: {
      type: String,
      required: [true, "Password is required"],
    },
    organizer: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

eventSchema.post("save", handleMongooseError);

type EventType = InferSchemaType<typeof eventSchema>;

export const Event = model<EventType>("event", eventSchema);
