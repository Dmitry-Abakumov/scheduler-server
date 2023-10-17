import express from "express";

import ctrl from "../../controllers/auth-controllers";

import schemas from "models/user";

import { validateBody } from "utils";

import { authenticate } from "middlewares";

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.put("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);

export default router;
