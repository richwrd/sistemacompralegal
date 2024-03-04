import express from 'express';
import CarrinhoCompraController from '../controllers/CarrinhoCompraController.js';

const router = express.Router();


router.get('/', CarrinhoCompraController.getCarrinhoCompra);
router.post('/', CarrinhoCompraController.createCarrinhoCompra);
router.get('/:id', CarrinhoCompraController.getCarrinhoCompra);
router.put('/:id', CarrinhoCompraController.updateCarrinhoCompra);
router.delete('/:id', CarrinhoCompraController.deleteCarrinhoCompra);

export default router;