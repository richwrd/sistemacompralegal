import mongoose from '../db/conn.js';
const { Schema } = mongoose;

const CarrinhoCompraSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referência ao usuário que possui o carrinho
    produtos: [
        {
            produtoId: { type: Schema.Types.ObjectId, ref: 'Produto', required: true }, // Referência ao produto no carrinho
            quantidade: { type: Number, default: 1 }, // Quantidade do produto
        }
    ],
    total: { type: Number, default: 0 }, // Total do carrinho
});

const CarrinhoCompra = mongoose.model('carrinhos_compra', CarrinhoCompraSchema);

export default CarrinhoCompra;
