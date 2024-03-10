import express from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = express.Router();


// DEVE SEGUIR UMA ORDEM MINUNCIOSA

router.get('/list', ProdutoController.getProdutoList);
router.post('/create', ProdutoController.createProdutoPost);
router.put('/edit/:id', ProdutoController.updateProdutoPut);
router.delete('/remove/:id', ProdutoController.deleteProduto);
router.get('/:id', ProdutoController.getProduto);

export default router;
