import CategoryModel from "../model/product/category.js";
import CategoryProductModel from "../model/product/categoryProduct.js";
import ProductModel from "../model/product/product.js";
import UnitModel from "../model/product/unit.js";
import StudentModel from "../model/student/student.js";
import UserModel from "../model/user/user.js";

const dbInit = async () => {
  await CategoryModel.sync({
    alter: true,
    force: false,
  });

  await UnitModel.sync({
    alter: true,
    force: false,
  });
  await ProductModel.sync({
    alter: true,
    force: false,
  });
  await CategoryProductModel.sync({
    alter: true,
    force: false,
  });
  await StudentModel.sync({
    alter: true,
    force: false,
  });
  await UserModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
