import { Schema, model } from "mongoose";
import Joi from "joi";

const taskSchema: Schema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Set text for task"],
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestaps: true,
  }
);

export const Task = model("task", taskSchema);
