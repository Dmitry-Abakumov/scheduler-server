import express from "express";

import ctrl from "../../controllers/task-controllers";

import schemas from "models/task";

import { isValidId, authenticate } from "middlewares";

import { validateBody } from "utils";

const router = express.Router();

router.get("/", authenticate, ctrl.getAllTasks);
router.patch(
  "/:id/done",
  isValidId,
  validateBody(schemas.updateDoneSchema),
  ctrl.updateDoneById
);
router.delete("/:id", authenticate, isValidId, ctrl.deleteTaskById);
router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addTask);

export default router;
