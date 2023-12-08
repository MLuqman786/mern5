import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const StudentModel = sequelize.define("student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rollNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default StudentModel;
