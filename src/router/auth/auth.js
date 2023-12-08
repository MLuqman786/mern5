import { Router } from "express";
import AuthController from "../../controller/auth/auth.js";

const authRouter = Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

export default authRouter;
