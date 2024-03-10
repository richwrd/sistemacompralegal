import express from 'express';
import CarrinhoCompraController from '../controllers/CarrinhoCompraController.js';

const router = express.Router();


router.post('/create', CarrinhoCompraController.createCarrinhoCompra);
router.put('/edit/:id', CarrinhoCompraController.updateCarrinhoCompra);
router.delete('/delete/:id', CarrinhoCompraController.deleteCarrinhoCompra);
router.get('/:id', CarrinhoCompraController.getCarrinhoCompra);

export default router;