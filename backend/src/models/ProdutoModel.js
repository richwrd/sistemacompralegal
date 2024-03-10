import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

connectDB();


const { ObjectId } = mongoose.Types;

const ProdutoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: false },
    tipo: { type: String, required: true },
    categoria: { type: String, required: false },
    quantidade: { type: Number, required: true },
}
);


// Plugin de sequência para gerar um ID sequencial se não for fornecido
ProdutoSchema.plugin(mongooseSequence(mongoose), {
    inc_field: 'seq',
    start_seq: 1,
    id: 'produtos_id',
    disableHooks: true // Desativa os ganchos para impedir a criação duplicada do ID
});

// Crie o modelo usando o esquema
const Produto = mongoose.model('produtos', ProdutoSchema);


export default Produto;
