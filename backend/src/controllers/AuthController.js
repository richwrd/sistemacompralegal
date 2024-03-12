import Usuario from '../models/UsuarioModel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export default class AuthController {

    static async loginAuth(req, res) {

        try {
            const usuario = await Usuario.findOne({ email: req.body.email });
            if (!usuario) {
                console.log('if1')
                return res.status(400).send('Usuário não encontrado.');
            }

            const senhaValida = await usuario.comparePassword(req.body.senha);
            if (!senhaValida) {

                console.log('if2')
                return res.status(400).send('Senha inválida!');
            }

            const accessToken = jwt.sign({ id: usuario._id }, process.env.ACCESS_TOKEN_SECRET);
            return res.json({ accessToken: accessToken });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Erro interno do servidor');
        }
    };

    static async registerAuthPost(req, res) {
        const { nome, sobrenome, idade, email, senha, confirmasenha } = req.body;

        if(!nome || !sobrenome || !idade || !email || !senha || !confirmasenha) {
            return res.status(400).send('Preencha todos os campos obrigatórios!');
        }

        if(confirmasenha !== senha){
            return res.status(400).send('As senhas não coincidem!');
        }

        try {
               // Verifica se o usuário já existe
            const usuarioExiste = await Usuario.findOne({ email: email });
            if (usuarioExiste) {
                return res.status(400).send('Email já cadastrado!');
            }

            // Cria uma nova instância do modelo Usuario
            const novoUsuario = new Usuario({
                nome: nome,
                sobrenome: sobrenome,
                idade: idade,
                email: email,
                senha: senha // A senha será criptografada automaticamente pelo pré-processamento do modelo
            });

            // Salva o novo usuário no banco de dados
            await novoUsuario.save();

            return res.status(201).send('Usuário Cadastrado com sucesso!');
            
        } catch (err) {
            console.log(err);
            res.status(500).send('ERRO na criação do usuário!');
        }
    };

}
