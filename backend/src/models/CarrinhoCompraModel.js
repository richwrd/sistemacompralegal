import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

connectDB();


const { ObjectId } = mongoose.Types;

const CarrinhoCompraSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    }, // ID do carrinho
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referência ao usuário que possui o carrinho
    produtos: [
        {
            produtoId: { type: Schema.Types.ObjectId, ref: 'Produto', required: true }, // Referência ao produto no carrinho
            quantidade: { type: Number, default: 1 }, // Quantidade do produto
        }
    ],
    total: { type: Number, default: 0 }, // Total do carrinho
}
);

// Plugin de sequência para gerar um ID sequencial se não for fornecido
CarrinhoCompraSchema.plugin(mongooseSequence(mongoose), {
    inc_field: 'seq',
    start_seq: 1,
    id: 'carrinho_compra_id',
    disableHooks: true // Desativa os ganchos para impedir a criação duplicada do ID
});

// Crie o modelo usando o esquema
const CarrinhoCompra = mongoose.model('carrinho_compra', CarrinhoCompraSchema);

export default CarrinhoCompra;
