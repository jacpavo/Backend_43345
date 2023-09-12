import { productsDAO } from "../DAOs/factoryDAO.js";

export const getProductsController = async (req, res) => {
    let products = await productsDAO.getAllProducts();
    res.send(products)
};

export const createProductsController = async (req, res) => {
    let product = req.body;
    let newProduct = await productsDAO.createProduct(product);
    res.send(newProduct)
};

export const updateProductsController = (req, res) => {
    res.send('products router put ok')
};

export const deleteProductsController = (req, res) => {
    res.send('products router delete ok')
}