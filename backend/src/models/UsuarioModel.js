import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

connectDB();

const { ObjectId } = mongoose.Types;

const UsuarioSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    idade: { type: Number, required: true },
    imagem: { type: String, required: false },
}
);

UsuarioSchema.plugin(mongooseSequence(mongoose), {
    inc_field: 'seq',
    start_seq: 1,
    id: 'usuarios_id',
    disableHooks: true // Desativa os ganchos para impedir a criação duplicada do ID
});


// Crie o modelo usando o esquema
const Usuario = mongoose.model('usuarios', UsuarioSchema);


export default Usuario;
