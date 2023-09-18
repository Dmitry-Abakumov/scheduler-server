import express from "express";

import ctrl from "../../controllers/task-controllers";
import { isValidId } from "middlewares";

const router = express.Router();

router.get("/", ctrl.getAllTasks);
router.patch("/:id/done", isValidId, ctrl.updateDoneById);
router.delete("/:id", isValidId, ctrl.deleteTaskById);
router.post("/", ctrl.addTask);

export default router;