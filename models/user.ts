import { Schema, model, InferSchemaType } from "mongoose";
import Joi from "joi";

import { handleMongooseError } from "utils";

const userSchema = new Schema(
  {
    login: {
      type: String,
      required: [true, "Login is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: Boolean,
      required: [true, "Password is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.post("save", handleMongooseError);

export const loginSchema = {};

type User = InferSchemaType<typeof userSchema>;

export const User = model<User>("task", userSchema);
