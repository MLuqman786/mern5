import { Router } from "express";
import StudentController from "../../controller/student/student.js";

const studentRouter = Router();

studentRouter.post("/", StudentController.create);
studentRouter.get("/allStudent", StudentController.getAll);
studentRouter.get("/:id", StudentController.getSingle);
studentRouter.put("/:id", StudentController.update);
studentRouter.delete("/:id", StudentController.delete);

export default studentRouter;
