import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/login', AuthController.loginAuth);
router.post('/verify', AuthController.verifyToken);
router.post('/register', AuthController.registerAuthPost);
// router.get('/logout', AuthController.logoutAuth);

export default router;
