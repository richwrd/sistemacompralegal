import connectDB from '../config/db.js';
import mongoose, { Schema } from 'mongoose';
import mongooseSequence from 'mongoose-sequence';
import bcrypt from 'bcrypt';


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
    email: { type: String, required: true },
    senha: { type: String, required: true },
}
);

UsuarioSchema.plugin(mongooseSequence(mongoose), {
    inc_field: 'seq',
    start_seq: 1,
    id: 'usuarios_id',
    disableHooks: true // Desativa os ganchos para impedir a criação duplicada do ID
});

// Pré-processamento da senha antes de salvar
UsuarioSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('senha')) return next();

    try {
        // Gera um salt com complexidade 12
        const salt = await bcrypt.genSalt(12);
        
        // Hash da senha usando o salt
        const hashedPassword = await bcrypt.hash(user.senha, salt);
        user.senha = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

// Método para verificar a senha
UsuarioSchema.methods.comparePassword = async function (senha) {
    try {
        // Compara a senha fornecida com a senha hash do usuário
        return await bcrypt.compare(senha, this.senha);
    } catch (error) {
        throw error;
    }
};


// Crie o modelo usando o esquema
const Usuario = mongoose.model('usuarios', UsuarioSchema);


export default Usuario;
