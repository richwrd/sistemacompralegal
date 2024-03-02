import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProduct);
router.post('/create', ProductController.createProduct);
router.put('/edit/:id', ProductController.updateProduct);
router.delete('/remove/:id', ProductController.deleteProduct);

export default router;