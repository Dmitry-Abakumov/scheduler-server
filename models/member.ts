import { Schema, model, InferSchemaType } from "mongoose";
import Joi from "joi";

import { handleMongooseError } from "../utils";

const memberSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Set text for name"],
    },
    email: {
      type: String,
      required: [true, "Set text for email"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Set text for dateOfBirth"],
    },
    referralSource: {
      type: String,
      required: [true, "Set text for referralSource"],
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "event",
      required: [true, "Set text for eventId"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

memberSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  fullName: Joi.string().required().messages({
    "any.required": `missing required fullName field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  dateOfBirth: Joi.string().required().messages({
    "any.required": `missing required dateOfBirth field`,
  }),
  referralSource: Joi.string().required().messages({
    "any.required": `missing required referralSource field`,
  }),
});

type Member = InferSchemaType<typeof memberSchema>;

export const Member = model<Member>("member", memberSchema);

const schemas = {
  addSchema,
};

export default schemas;
