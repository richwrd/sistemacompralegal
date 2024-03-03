import connectDB from '../config/db.js';
import mongoose,{ Schema } from 'mongoose';

connectDB();

const CarrinhoCompra = mongoose.model(
    'carrinho_compra',
    new Schema({
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referência ao usuário que possui o carrinho
        produtos: [
            {
                produtoId: { type: Schema.Types.ObjectId, ref: 'Produto', required: true }, // Referência ao produto no carrinho
                quantidade: { type: Number, default: 1 }, // Quantidade do produto
            }
        ],
        total: { type: Number, default: 0 }, // Total do carrinho
    }
    ));

export default CarrinhoCompra;
