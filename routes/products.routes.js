import express from 'express';
import Products from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', Products.getProductList);
router.get('/:productId', Products.getProductById);

router.post('/create', Products.createProduct);
router.put('/edit', Products.editProduct);

export default router;