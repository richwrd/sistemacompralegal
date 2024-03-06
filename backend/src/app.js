// CONFIGURAÇÕES GERAIS DO APLICATIVO

import cors from 'cors';
import express from 'express';
import connectDB from './config/db.js'; 
import ProdutoRoutes from './routes/ProdutoRoutes.js';
import UsuarioRoutes from './routes/UsuarioRoutes.js';
import CarrinhoCompraRoutes from './routes/CarrinhoCompraRoutes.js';

const app = express();

// Função de conexão com o MongoDB
connectDB();

// Habilita o CORS para todas as origens
app.use(cors());

// Middleware para processar JSON
app.use(express.json());

// Rota para produtos
app.use('/usuario', UsuarioRoutes);
app.use('/produto', ProdutoRoutes);
app.use('/carrinho', CarrinhoCompraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});


