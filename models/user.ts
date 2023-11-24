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
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },
    displayMode: {
      type: String,
      default: "column",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.post("save", handleMongooseError);

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  password: Joi.string().required().messages({
    "any.required": `missing required password field`,
  }),
});

const registerSchema = Joi.object({
  login: Joi.string().required().messages({
    "any.required": `missing required login field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  password: Joi.string().required().messages({
    "any.required": `missing required password field`,
  }),
});

const updateDisplayModeSchema = Joi.object({
  displayMode: Joi.string().required().messages({
    "any.required": `mising required object property - displayMode`,
  }),
});

type User = InferSchemaType<typeof userSchema>;

export const User = model<User>("user", userSchema);

const schemas = {
  registerSchema,
  loginSchema,
  updateDisplayModeSchema,
};

export default schemas;
