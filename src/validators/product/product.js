import Joi from "joi";

const productValidator = {
  create: async (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        productName: Joi.string().min(3).max(40).required(),
        // email: Joi.string().email().max(60).required(),
        // product_sales: Joi.array()
        //   .items(
        //     Joi.object({
        //       name: Joi.string().min(3).max(50).required(),
        //       price: Joi.number().min(3).max(50).required(),
        //     })
        //   )
        //   .required(),
      });
      const { error, value } = schema.validate(body);
      if (error) {
        res.status(400).json({
          message: "invalid data",
        });
      }
      next();
    } catch (err) {
      res.status(500).json({
        message: "someThing bad happened",
        err,
      });
    }
  },
};

export default productValidator;
