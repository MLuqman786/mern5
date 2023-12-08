import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import ProductModel from "./product.js";
import CategoryModel from "./category.js";

const CategoryProductModel = sequelize.define("CategoryProduct", {
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: ProductModel,
      key: "id",
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: CategoryModel,
      key: "id",
    },
  },
});

CategoryModel.belongsToMany(ProductModel, { through: CategoryProductModel });
ProductModel.belongsToMany(CategoryModel, { through: CategoryProductModel });

export default CategoryProductModel;
