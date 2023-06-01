import { Router } from "express";
import ProductManager from '../classes/ProductsManager.class.js';
const router = Router();

const productManager = new ProductManager();

router.get('/', (req, res) => {


    res.render('viewsRouterProducts')
})

export default router;