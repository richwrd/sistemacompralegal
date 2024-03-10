import assert from 'assert';
import UsuarioController from '../../src/controllers/UsuarioController.js';
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


describe('📦 GET', () => {
  describe('#getUsuario()\n        usuario/id', () => {
    it('Deve retornar o usuário pelo id', async () => {

        // Nome do usuário p/ teste
        const nomeUsuario = 'TesteUser';

        // Busca o ID do usuário pelo nome
        const idUsuario = await buscarIdUsuarioPorNome(nomeUsuario);

        if (idUsuario) {
          // Cria a requisição com o ID do usuário
          const req = { params: { id: idUsuario } };

          // Objeto de resposta simulado
          const res = {
            statusCode: null,
            jsonData: null,
            status(code) {
              this.statusCode = code;
              return this;
            },
            json(data) {
              this.jsonData = data;
            }
          };

          // Chama a função do controlador para obter o usuário pelo ID
          await UsuarioController.getUsuario(req, res);

          // Verifica se o usuário retornado tem o nome esperado
          assert.strictEqual(res.jsonData.nome, nomeUsuario);
        } else {
          console.log('Usuário não encontrado');
        }
    });
  });

});

