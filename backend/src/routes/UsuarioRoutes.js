import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/edit', UsuarioController.editUsuarioPost);
router.get('/edit/:id', UsuarioController.editUsuario);
router.get('/create', UsuarioController.createUsuario);
router.post('/create', UsuarioController.createUsuarioPost);

export default router;