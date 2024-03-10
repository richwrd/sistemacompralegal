import assert from 'assert';
import ProdutoController from '../../src/controllers/ProdutoController.js';
import ProdutoModel from '../../src/models/ProdutoModel.js';


// Função para buscar o ID do Produto pelo nome no banco de dados
// IMITA COMPORTAMENTO DO FRONT EM ENVIAR E RECEBER..

async function buscarIdProdutoPorNome(nomeProduto) {
  try {
    // Use seu método de acesso ao banco de dados para buscar o ID pelo nome
    const Produto = await ProdutoModel.findOne({ nome: nomeProduto });
    if (Produto) {
      return Produto._id; // Retorna o ID se o Produto for encontrado
    } else {
      return null; // Retorna null se o Produto não for encontrado
    }
  } catch (error) {
    console.error('Erro ao buscar ID do Produto:', error);
    throw error;
  }
}

describe('📦 POST', () => {
  describe('#createProduto()\n        produto/create', () => {
    it('Deve criar um novo produto', async () => {
      const mockProdutoEnviado = {
        nome: 'Produto Teste 1',
        preco: 1000,
        descricao: 'Produto Fumegante',
        tipo: 'Produto Tipo', 
        categoria: 'Teste',
        quantidade: 10,
    }; 

      const req = { body: mockProdutoEnviado };

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
      await ProdutoController.createProdutoPost(req,res);

      // console.log(req)
      // console.log(res)
      
      // Verifica o status da resposta
      assert.strictEqual(res.statusCode, 201); 

      // Retira parametros não enviados e cria um novo objeto
      const { _id, __v, imagem, ...ProdutoSemIdEV } = res.jsonData._doc;
      
      assert.deepStrictEqual(ProdutoSemIdEV, mockProdutoEnviado);

      // verifica se gravou no banco de dados
      const idProduto = await buscarIdProdutoPorNome(mockProdutoEnviado.nome);

      // Converte o ID retornado para string
      const idProdutoString = String(idProduto);

      assert.strictEqual(res.jsonData._id.toString(), idProdutoString);

    });
  });

});

