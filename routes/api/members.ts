import express from "express";

import ctrl from "../../controllers/members-controllers";

import { isValidId } from "../../middlewares";

import schemas from "../../models/member";

import { validateBody } from "../../utils";

const router = express.Router();

router.get("/event/:id", isValidId, ctrl.getEventMembers);

router.post(
  "/event/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.addMember
);

export default router;
