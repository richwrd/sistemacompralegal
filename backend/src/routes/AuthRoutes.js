import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.get('/login', AuthController.loginAuth);
router.post('/register', AuthController.registerAuthPost);

export default router;
