import { Schema, model, InferSchemaType } from "mongoose";
import Joi from "joi";

const taskSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Set text for task"],
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const updateDoneSchema = {
  done: Joi.boolean(),
};

type Task = InferSchemaType<typeof taskSchema>;

export const Task = model<Task>("task", taskSchema);
