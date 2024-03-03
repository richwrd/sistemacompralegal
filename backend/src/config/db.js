// Arquivo de configuração do MongoDB
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sistemacompralegal');
        console.log('Conexão com o MongoDB estabelecida!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB; 
