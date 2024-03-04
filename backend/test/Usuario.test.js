import assert from 'assert';
import UsuarioController from '../src/controllers/UsuarioController.js';
import UsuarioModel from '../src/models/UsuarioModel.js';


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

describe('UsuarioController', () => {
  describe('#createUsuario()', () => {
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

    });
  });

  describe('UsuarioController', () => {
    describe('#getUsuario()', () => {
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


  // describe('UsuarioController', () => {
  //   describe('#editUsuarioPost()', () => {
  //     it('Deve editar um usuário existente', async () => {
      
  //       // Nome do usuário p/ teste
  //       const nomeUsuario = 'TesteUser';

  //       // Busca o ID do usuário pelo nome
  //       const idUsuario = await buscarIdUsuarioPorNome(nomeUsuario);

  //       // Suponha que você tenha os novos dados para atualização do usuário
  //       const dadosAtualizados = {
  //         nome: 'TesteUserUpdated',
  //         sobrenome: 'Mocha',
  //         idade: 35,
  //         imagem: 'nova_imagem.jpg'
  //       };

  //       // Criando uma requisição falsa com os parâmetros necessários
  //       const req = {
  //         params: { id: idUsuario },
  //         body: dadosAtualizados
  //       };

  //       const res = {
  //         statusCode: null,
  //         jsonData: null,
  //         status(code) {
  //           this.statusCode = code;
  //           return this;
  //         },
  //         json(data) {
  //           this.jsonData = data;
  //         }
  //       };
        
  //       // Chamando a função do controlador para editar o usuário
  //       await UsuarioController.editUsuarioPost(req, res);

  //       // Verificando se a resposta foi enviada corretamente
  //       assert.strictEqual(res.statusCode, 200); // Verifica se o status é 200 (OK)

  //       // Verificando se o usuário foi atualizado no banco de dados
  //       const usuarioAtualizado = await UsuarioModel.findById(idUsuario);
  //       assert.strictEqual(usuarioAtualizado.nome, dadosAtualizados.nome); // Verifica se o nome foi atualizado corretamente
  //       assert.strictEqual(usuarioAtualizado.sobrenome, dadosAtualizados.sobrenome); // Verifica se o sobrenome foi atualizado corretamente
  //       assert.strictEqual(usuarioAtualizado.idade, dadosAtualizados.idade); // Verifica se a idade foi atualizada corretamente
  //       assert.strictEqual(usuarioAtualizado.imagem, dadosAtualizados.imagem); 
  //     });
  //   });
  // });


});

