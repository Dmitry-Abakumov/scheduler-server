import express from "express";

import * as ctrl from "../../controllers/events-controllers";

const router = express.Router();

router.get("/", ctrl.getAllEvents);

export default router;
