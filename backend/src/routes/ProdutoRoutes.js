import express from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = express.Router();

router.get('/:id', ProdutoController.getProduto);
router.get('/list', ProdutoController.getProdutoList);
router.post('/create', ProdutoController.createProdutoPost);
router.put('/edit/:id', ProdutoController.updateProdutoPut);
router.delete('/remove/:id', ProdutoController.deleteProduto);

export default router;
