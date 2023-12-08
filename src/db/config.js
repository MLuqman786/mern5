import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mern5", "postgres", "killerkip786", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection has been established successfully");
  } catch (error) {
    console.log("unable to connect o the database", error);
  }
};

export default sequelize;
