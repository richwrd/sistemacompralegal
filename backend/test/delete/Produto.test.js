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

describe('📦 DELETE', () => {
  describe('#deleteProduto()\n        produto/remove/:id', () => {
    it('Deve excluir um produto existente', async () => {
      // Nome do Produto para teste
      const nomeProduto = 'Produto Teste Up!';

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

        // Chama a função do controlador para excluir o produto pelo ID
        await ProdutoController.deleteProduto(req, res);

        // Verifica se o produto foi excluído corretamente
        assert.strictEqual(res.statusCode, 200); // Verifica se o status é 200 (OK)

        // Tente buscar o produto excluído para garantir que não existe mais
        const produtoExcluido = await ProdutoModel.findById(idProduto);
        assert.strictEqual(produtoExcluido, null); // Verifica se o produto foi excluído corretamente
      } else {
        console.log('Produto não encontrado');
      }
    });
  });
});
