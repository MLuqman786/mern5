import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const ProductModel = sequelize.define("product", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default ProductModel;
