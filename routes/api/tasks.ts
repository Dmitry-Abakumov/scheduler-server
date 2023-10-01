import express from "express";

import ctrl from "../../controllers/task-controllers";

import schemas from "models/task";

import { isValidId } from "middlewares";

import { validateBody } from "utils";

const router = express.Router();

router.get("/", ctrl.getAllTasks);
router.patch(
  "/:id/done",
  isValidId,
  validateBody(schemas.updateDoneSchema),
  ctrl.updateDoneById
);
router.delete("/:id", isValidId, ctrl.deleteTaskById);
router.post("/", validateBody(schemas.addSchema), ctrl.addTask);

export default router;
