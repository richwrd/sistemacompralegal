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

describe('📦 DELETE', () => {
  describe('#deleteUsuario()\n        usuario/remove/:id', () => {
    it('Deve excluir um usuário existente', async () => {

      const nomeUsuario = 'TesteUserUpdated';

      // Busca o ID do usuário pelo nome
      const idUsuario = await buscarIdUsuarioPorNome(nomeUsuario);

      if (idUsuario) {
      const req = { params: { id: idUsuario } };

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
       // Criando um objeto res simulado com propriedades dinâmicas
      
      // Chama a função da controladora
      await UsuarioController.deleteUsuario(req,res);

      // Verifica o status da resposta
      assert.strictEqual(res.statusCode, 200); 
      
      // Tente buscar o produto excluído para garantir que não existe mais
      const usuarioExcluido = await UsuarioModel.findById(idUsuario);
      assert.strictEqual(usuarioExcluido, null); // Verifica se o produto foi excluído corretamente
      } else {
        console.log('Usuário não encontrado');
      }

    });
  })


});

