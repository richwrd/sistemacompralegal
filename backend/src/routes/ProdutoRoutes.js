import express from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = express.Router();

router.get('/', ProdutoController.getProdutos);
router.get('/:id', ProdutoController.getProduto);
router.post('/create', ProdutoController.createProduto);
router.put('/edit/:id', ProdutoController.updateProduto);
router.delete('/remove/:id', ProdutoController.deleteProduto);

export default router;
