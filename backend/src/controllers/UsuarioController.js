import Usuario from '../models/UsuarioModel.js';

export default class UsuarioController {

    static async createUsuario(req, res) {
        try {
            const { nome, sobrenome, idade, imagem } = req.body;
            const usuario = new Usuario({ nome, sobrenome, idade, imagem });
            
            await usuario.save();

            res.status(201).json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async createUsuarioPost(req, res) {
        try {
            const { nome, sobrenome, idade, imagem } = req.body;
            const usuario = new Usuario({ nome, sobrenome, idade, imagem });
            
            await usuario.save();
            
            res.status(201).json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async editUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findById(id).lean();
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            res.json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async editUsuarioPost(req, res) {
        try {
            const { id } = req.params;
            const { nome, sobrenome, idade, imagem } = req.body;
            const updatedUsuario = { nome, sobrenome, idade, imagem };

            const usuario = await Usuario.findByIdAndUpdate(id, updatedUsuario, { new: true });

            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            res.json(usuario);
            
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
            res.json(usuario);
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
            res.json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    


}
