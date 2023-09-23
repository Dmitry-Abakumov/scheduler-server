import express from "express";

import ctrl from "../../controllers/auth-controllers";
import { isValidId } from "middlewares";

const router = express.Router();

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

export default router;
