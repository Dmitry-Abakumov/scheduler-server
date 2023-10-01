import { Schema, model, InferSchemaType } from "mongoose";
import Joi from "joi";

import { handleMongooseError } from "utils";

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

taskSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  text: Joi.string().required().messages({
    "any.required": `missing required text field`,
  }),
});

const updateDoneSchema = Joi.object({
  done: Joi.boolean().required().messages({
    "any.required": `missing required done field`,
  }),
});

type Task = InferSchemaType<typeof taskSchema>;

export const Task = model<Task>("task", taskSchema);

const schemas = {
  updateDoneSchema,
  addSchema,
};

export default schemas;
