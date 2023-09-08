import express from "express";

import * as ctrl from "../../controllers/task-controllers";

const router = express.Router();

router.get("/", ctrl.getAllTasks);

export {};
