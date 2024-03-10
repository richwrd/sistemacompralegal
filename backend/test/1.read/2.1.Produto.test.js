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

describe('📦 GET', () => {
  describe('#getProduto()\n        produtos/:id', () => {
    it('Deve retornar o produto pelo id', async () => {

        // Nome do produto p/ teste
        const nomeProduto = 'Produto Teste 1';

        // Busca o ID do produto pelo nome
        const idProduto = await buscarIdProdutoPorNome(nomeProduto);

        if (idProduto) {
          // Cria a requisição com o ID do produto
          const req = { params: { id: idProduto } };

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

          // Chama a função do controlador para obter o produto pelo ID
          await ProdutoController.getProduto(req, res);

          // Verifica se o produto retornado tem o nome esperado
          assert.strictEqual(res.jsonData.nome, nomeProduto);
        } else {
          console.log('Produto não encontrado');
        }
    });
  });

  describe('#getProdutos()\n        produtos/list', () => {
    it('Deve retornar a lista de produtos', async () => {
      // Cria a requisição (vazia, pois não requer parâmetros)
      const req = {};
  
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
  
      // Chama a função do controlador para obter a lista de produtos
      await ProdutoController.getProdutoList(req, res);
  
      // Verifica o status da resposta
      assert.strictEqual(res.statusCode, 200);
  
      // Verifica se os dados retornados estão no formato esperado
      // assert(Array.isArray(res.jsonData), 'A resposta deve ser uma matriz de produtos');
  
      // Se desejar, você pode adicionar mais verificações sobre o conteúdo dos produtos
      // Por exemplo, você pode verificar se cada produto tem as propriedades esperadas
      // assert.strictEqual(res.jsonData[0].nome, 'Nome do Produto');
      // assert.strictEqual(res.jsonData[0].preco, 1000);
      // E assim por diante
    });
  });
  
});


