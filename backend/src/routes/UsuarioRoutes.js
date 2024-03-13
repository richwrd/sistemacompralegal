import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/edit', UsuarioController.editUsuarioPost);
router.post('/create', UsuarioController.createUsuarioPost);
router.get('/edit/:id', UsuarioController.editUsuario);
router.get('/delete/:id', UsuarioController.deleteUsuario);
router.get('/:id', UsuarioController.getUsuario);


export default router;