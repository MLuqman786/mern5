import sequelize from "../../db/config.js";
import usersModel from "../UserModel/UserModel.js";

const followModel = sequelize.define("follow", {});

usersModel.belongsToMany(usersModel, {
  through: followModel,
  as: "followers",
  foreignKey: "followerUserId",
});
usersModel.belongsToMany(usersModel, {
  through: followModel,
  as: "following",
  foreignKey: "followingUserId",
});

export default followModel;
