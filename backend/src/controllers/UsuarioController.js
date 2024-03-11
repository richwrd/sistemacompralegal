import Usuario from '../models/UsuarioModel.js';

export default class UsuarioController {


    static async editUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findById(id).lean();
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            return res.status(200).json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async editUsuarioPost(req, res) {
        try {
            const { id } = req.params;
            const { nome, sobrenome, idade, imagem, email, senha, confirmacaosenha} = req.body;
            const updatedUsuario = { nome, sobrenome, idade, imagem, email, senha, confirmacaosenha };

            const usuario = await Usuario.findByIdAndUpdate(id, updatedUsuario, { new: true });

            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            return res.status(200).json(usuario);
            
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }


    static async deleteUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByIdAndDelete(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            return res.status(200).json({ message: 'Produto excluído com sucesso' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async getUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findById(id).lean();
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            return res.json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    


}
