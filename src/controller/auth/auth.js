import { compare, hash } from "bcrypt";
import JWT from "jsonwebtoken";
import UserModel from "../../model/user/user.js";
import loginEmail from "../../email/login.js";

const AuthController = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      const CheckUserEmail = await UserModel.findOne({
        where: {
          email,
        },
      });
      if (CheckUserEmail) {
        res.status(400).json({
          message: "user with this email already register",
          // CheckUserEmail,
        });
      }

      const hashPassword = await hash(password, 10);
      console.log("check hashPassword  ========>", hashPassword);

      await UserModel.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });
      return res.status(201).json({
        message: "User registered",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something bad happened",
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(401).json({
          message: "user not found bcz of invalid credential",
        });
      }
      const comparePassword = await compare(password, user.password);
      if (!comparePassword) {
        return res.status(401).json({
          message: "invalid credentials ==> Password not compared",
          comparePassword,
        });
      }

      const data = {
        id: user.id,
        email: user.email,
      };

      const token = JWT.sign(data, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      loginEmail({
        from: "luqman1@gmail.com",
        to: user.email,
        subject: "welcome login Notification",
        text: "Welcome You Are Login Successfully  ",
      });

      // req.session.token = token;
      // req.session.user = data;
      // req.session.save();

      return res.status(200).json({
        message: "login successfully",
        token,
        // data,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        err,
        message: "something bad happened",
      });
    }
  },
};
export default AuthController;
