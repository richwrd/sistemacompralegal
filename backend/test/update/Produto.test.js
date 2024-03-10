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

describe('📦 PUT', () => {
  describe('#editProdutoPost()\n        produto/edit/:id', () => {
    it('Deve editar um Produto existente', async () => {
    
      // Nome do Produto p/ teste
      const nomeProduto = 'Produto Teste 1';

      // Busca o ID do produto pelo nome
      const idProduto = await buscarIdProdutoPorNome(nomeProduto);

      // Suponha que você tenha os novos dados para atualização do Produto
      const dadosAtualizados = {
          nome: 'Produto Teste Up!',
          preco: 2500,
          descricao: 'Produto Updated',
          tipo: 'Produto Tipo', 
          categoria: 'Teste',
          quantidade: 20,
      }; 

      // Criando uma requisição falsa com os parâmetros necessários
      const req = {
        params: { id: idProduto },
        body: dadosAtualizados
      };

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
      
      // Chamando a função do controlador para editar o Produto
      await ProdutoController.updateProdutoPut(req, res);

      // console.log(req)
      // console.log(res)

      // Verificando se a resposta foi enviada corretamente
      assert.strictEqual(res.statusCode, 200); // Verifica se o status é 200 (OK)

      // Verificando se o Produto foi atualizado no banco de dados
      const ProdutoAtualizado = await ProdutoModel.findById(idProduto);
      assert.strictEqual(ProdutoAtualizado.nome, dadosAtualizados.nome); 
      assert.strictEqual(ProdutoAtualizado.preco, dadosAtualizados.preco); 
      assert.strictEqual(ProdutoAtualizado.descricao, dadosAtualizados.descricao); 
      assert.strictEqual(ProdutoAtualizado.tipo, dadosAtualizados.tipo); 
      assert.strictEqual(ProdutoAtualizado.categoria, dadosAtualizados.categoria);
      assert.strictEqual(ProdutoAtualizado.quantidade, dadosAtualizados.quantidade);

    });
  });
});

