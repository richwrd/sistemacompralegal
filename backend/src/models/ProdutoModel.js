import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';

connectDB();

const Produto = mongoose.model(
    'produtos',
    new Schema({
        nome: { type: String, required: true },
        preco: { type: Number, required: true },
        descricao: { type: String, required: true },
        imagem: { type: String, required: false },
        categoria: { type: String, required: false },
        quantidade: { type: Number, required: true },
    }
    )
    );

export default Produto;
