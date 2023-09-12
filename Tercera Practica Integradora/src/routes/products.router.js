import { Router } from 'express';
import { 
    getProductsController,
    createProductsController,
    updateProductsController,
    deleteProductsController
 } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get('/', getProductsController);
productsRouter.post('/', createProductsController);
productsRouter.put('/', updateProductsController);
productsRouter.delete('/', deleteProductsController)

export default productsRouter;