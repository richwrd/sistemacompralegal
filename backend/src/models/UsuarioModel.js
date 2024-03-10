import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';

connectDB();

const Usuario = mongoose.model(
    'usuarios',
    new Schema({
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        idade: { type: Number, required: true },
        imagem: { type: String, required: false },
    }
));

export default Usuario;
