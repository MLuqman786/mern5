import sequelize from "../../db/config.js";
import DataTypes from "sequelize";
import ProductModel from "./product.js";

const UnitModel = sequelize.define("unit", {
  unitName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UnitModel.hasMany(ProductModel);
ProductModel.belongsTo(UnitModel);

export default UnitModel;
