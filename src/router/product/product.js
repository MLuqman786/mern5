import { Router } from "express";
import ProductController from "../../controller/product/product.js";
import productValidator from "../../validators/product/product.js";

const ProductRouter = Router();

ProductRouter.post("/", productValidator.create, ProductController.create);

export default ProductRouter;
