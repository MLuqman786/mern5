import { Router } from "express";
import ProductRouter from "./product/product.js";
import studentRouter from "./student/student.js";
import authRouter from "./auth/auth.js";

const AllRouter = Router();

AllRouter.use("/product", ProductRouter);
AllRouter.use("/student", studentRouter);
AllRouter.use("/user", authRouter);

export default AllRouter;
