import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/edit', UsuarioController.editUsuarioPost);
router.get('/edit/:id', UsuarioController.editUsuario);
router.post('/create', UsuarioController.createUsuarioPost);
router.get('/delete/:id', UsuarioController.deleteUsuario);
// router.get('/list', UsuarioController.listUsuario);


export default router;