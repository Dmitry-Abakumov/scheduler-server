import express from "express";

import { authenticate } from "middlewares";

import { validateBody } from "utils";

import * as ctrl from "../../controllers/user-controllers";

import schemas from "models/user";

const router = express.Router();

router.patch(
  "/display-mode",
  authenticate,
  validateBody(schemas.updateDisplayModeSchema),
  ctrl.updateDisplayMode
);

export default router;
