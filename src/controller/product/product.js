// import CategoryProductModel from "../../model/product/categoryProduct.js";
// import CategoryModel from "../../model/product/category.js";
import ProductModel from "../../model/product/product.js";
import UnitModel from "../../model/product/unit.js";

const ProductController = {
  create: async (req, res) => {
    const { productName, unitId } = req.body;
    const product = await ProductModel.create({
      // name: productName,
      // productName: "p4",
      productName,
      unitId: 1,
    });

    // const { unitName } = req.body;
    // const unit = await UnitModel.create({
    //   unitName: "u4",
    // });

    // const { categoryName } = req.body;
    // const data = await CategoryModel.create({
    //   categoryName: "c1",
    // });

    // const data = await CategoryProductModel.create({
    //   categoryId: 1,
    //   productId: 2,
    // });

    // const data = await ProductModel.findByPk(6, {
    //   includes: [UnitModel],
    //   logging: true,
    // });

    res.status(201).json({
      message: "Product has been created",
      // data: product
      product,
      // unit,
      // data,
    });
  },
};

export default ProductController;
