import Usuario from '../models/Usuario.js';

export default class UsuarioController {

    static async createUsuario(req, res) {
        try {
            if (!req.isAuthenticated()) {
                return res.redirect('/login'); // Redirecionar para a página de login se o usuário não estiver autenticado
            }
            res.render('usuarios/create');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
        }
    }

    static async createUsuarioPost(req, res) {
        try {
            if (!req.isAuthenticated()) {
                return res.redirect('/login'); // Redirecionar para a página de login se o usuário não estiver autenticado
            }

            const { nome, email, senha } = req.body;

            const usuario = new Usuario({ nome, email, senha });

            // Aqui você pode adicionar validações adicionais se necessário

            await usuario.save();

            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
        }
    }

    static async editUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findById(id).lean();
            if (!usuario) {
                return res.status(404).send('Usuário não encontrado');
            }
            res.render('usuarios/edit', { usuario });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
        }
    }

    static async editUsuarioPost(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;

            const updatedUsuario = { nome, email, senha };

            await Usuario.findByIdAndUpdate(id, updatedUsuario);

            res.redirect('/usuarios'); // Redirecionar para a lista de usuários após a edição
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
        }
    }

}
