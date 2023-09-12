import config from "../config/config.js";
import mongoose from "mongoose";
import ProductsDAO from '../DAOs/products/products.dao.js';
import UsersDAO from '../DAOs/users/users.dao.js';

export let usersDAO = new UsersDAO();
export let productsDAO = new ProductsDAO();

switch (config.ENVIRONMENT) {
  case "prod":
    await mongoose.connect(config.MONGO_URL_PROD)
    break;
  case "dev":
    await mongoose.connect(config.MONGO_URL_DEV)
    break;
}