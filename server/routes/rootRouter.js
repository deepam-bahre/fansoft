const express = require("express");
const rootRouter = express.Router();
const userController = require("../controllers/userContoller");
const customerController = require("../controllers/customerController");
//middlewares
const auth = require("../middlewares/authmiddleware");
//auth routes
rootRouter.get("/", userController.homepage);
rootRouter.post("/signup", userController.signup);
rootRouter.post("/signin", userController.signin);

//customer crud routes
rootRouter.get(
  "/customers",
  auth.protect,
  auth.admin,
  customerController.getAllCustomers
);
rootRouter.post(
  "/customer/add",
  auth.protect,
  auth.admin,
  customerController.addCustomer
);
rootRouter.delete(
  "/customer/delete/:id",
  auth.protect,
  auth.admin,
  customerController.deleteCustomer
);

module.exports = rootRouter;
