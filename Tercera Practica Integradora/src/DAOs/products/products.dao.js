import { productsModel } from '../models/products.model.js';

export default class ProductsDAOMongo {
  constructor() {
    this.model = productsModel;
  }

  getAllProducts = async () => {
    try {
      const products = await this.model.find();
      return products;
    } catch (error) {
      console.log(error);
      throw new Error("Error getting products from mongo");
    }
  };

  createProduct = async (user) => {
    try {
      const newProduct = await this.model.create(user);
      return newProduct;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating product from mongo");
    }
  };
}