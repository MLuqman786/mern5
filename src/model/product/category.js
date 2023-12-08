import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const CategoryModel = sequelize.define("category", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default CategoryModel;
