import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

connectDB();

const Produto = mongoose.model(
    'produtos',
    new Schema({
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: function () {
                return mongoose.Types.ObjectId();
            }
        },
        nome: { type: String, required: true },
        preco: { type: Number, required: true },
        descricao: { type: String, required: true },
        imagem: { type: String, required: false },
        tipo: { type: String, required: true },
        categoria: { type: String, required: false },
        quantidade: { type: Number, required: true },
    }
    )
);

export default Produto;
