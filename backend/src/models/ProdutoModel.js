import mongoose from '../db/conn.js';
const { Schema } = mongoose;

const ProdutoSchema = new Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
});

const Produto = mongoose.model('produtos', ProdutoSchema);

export default Produto;
