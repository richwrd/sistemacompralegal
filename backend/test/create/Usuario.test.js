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

describe('📦 POST', () => {
  describe('#createUsuario()\n        usuario/create', () => {
    it('Deve criar um novo usuário', async () => {
      const mockUsuarioEnviado = { nome: 'TesteUser', sobrenome: 'Mocha', idade: 60, imagem: 'teste.png'};

      const req = { body: mockUsuarioEnviado };

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
      await UsuarioController.createUsuarioPost(req,res);

      // Verifica o status da resposta
      assert.strictEqual(res.statusCode, 201); 

      // Retira parametros não enviados e cria um novo objeto
      const { _id, __v, ...usuarioSemIdEV } = res.jsonData._doc;
      
      // console.log('COMPARACAO FINAL ENVIADO:', mockUsuarioEnviado)
      // console.log('COMPARACAO FINAL RECEBIDO:', usuarioSemIdEV)
      // Verifica os dados enviados na resposta, excluindo _id e __v
      assert.deepStrictEqual(usuarioSemIdEV, mockUsuarioEnviado);
      
      
      // Verifica se o ID retornado é o mesmo do banco de dados
      const idUsuario = await buscarIdUsuarioPorNome(mockUsuarioEnviado.nome);
      
      const idUsuarioString = String(idUsuario);

      assert.strictEqual(res.jsonData._id.toString(), idUsuarioString);

    });
  });

});

