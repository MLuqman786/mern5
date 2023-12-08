import "dotenv/config";
import express from "express";
import sequelize, { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";
import AllRouter from "./router/main.js";
import session from "express-session";
import sequelizeStore from "connect-session-sequelize";

import AuthenticateMiddleware from "./middleware/authenticate.js";
import multer from "multer";
import path from "path";

const PORT = 3003;

const app = express();

connectDB();

// const mySequelizeStore = sequelizeStore();
// const mySequelizeStoreNew = new mySequelizeStore({
//   db: sequelize,
// });

dbInit()
  .then(() => console.log("DB sync"))
  .catch((error) => {
    console.log("DB Not Sync", error);
  });

app.use(express.json());
app.use("/", AllRouter);

app.use("/", AuthenticateMiddleware, (req, res) => {
  return res.json({
    message: "hello world",
  });
});

// _____________________________________Multer

const storage = multer.diskStorage({
  destination: "./upload/image",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + file.originalname);
  },
});

const upload = multer({
  // dest: "./upload/image",
  storage,
});

app.post("/upload", upload.single("luqman"), (req, res) => {
  res.json({
    message: req.file,
  });
});

// ________________ listen ________________________

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server started at http://localhost:${PORT}`);
  } else {
    console.log("someThing Bad happened during starting");
  }
});
