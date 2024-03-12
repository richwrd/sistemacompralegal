import assert from 'assert';
import AuthController from '../../src/controllers/AuthController.js';
import UsuarioModel from '../../src/models/UsuarioModel.js';


// Função para buscar o ID do usuário pelo nome no banco de dados
async function buscarIdUsuarioPorNome(nomeUsuario) {
  try {
    // Use seu método de acesso ao banco de dados para buscar o ID pelo nome
    const usuario = await UsuarioModel.findOne({ nome: nomeUsuario });
    if (usuario) {
      return usuario._id; // Retorna o ID se o usuário for encontrado
    } else {
      return null; // Retorna null se o usuário não for encontrado
    }
  } catch (error) {
    console.error('Erro ao buscar ID do usuário:', error);
    throw error;
  }
}


describe('📦 POST', () => {
  describe('#createUsuario()\n        auth/register', () => {
    it('Deve criar um novo usuário', async () => {
      const mockUsuarioEnviado = {
        nome: 'TesteUser',
        sobrenome: 'teste',
        idade: 1,
        imagem: 'teste.png',
        email: 'teste1@teste.com.br',
        senha: 'senha123',
        confirmasenha: 'senha123'
      };

      const req = { body: mockUsuarioEnviado };

      const res = {
        statusCode: null,
        jsonData: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        send(data) {
          this.jsonData = data;
        }
      };
      // Criando um objeto res simulado com propriedades dinâmicas

      // Chama a função da controladora
      await AuthController.registerAuthPost(req, res);

      // Verifica o status da resposta
      assert.strictEqual(res.statusCode, 201);

    });
  });

});

