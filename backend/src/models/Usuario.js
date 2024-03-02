import mongoose from '../db/conn.js';
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    idade: { type: Number, required: true },
    imagem: { type: String, required: true },
});

const Usuario = mongoose.model('usuarios', UsuarioSchema);

export default Usuario;
