// import assert from 'assert';
// import CarrinhoCompraController from '../../src/controllers/CarrinhoCompraController.js';
// import CarrinhoCompraModel from '../../src/models/CarrinhoCompraModel.js';


// // Função para buscar o ID do CarrinhoCompra pelo nome no banco de dados
// async function buscarCarrinhoCompraPorUsuario(idUsuario) {
//   try {
//     // Use seu método de acesso ao banco de dados para buscar o ID pelo nome
//     const CarrinhoCompra = await CarrinhoCompraModel.findOne({ userId: idUsuario });
//     if (CarrinhoCompra) {
//       return CarrinhoCompra._id; // Retorna o ID se o CarrinhoCompra for encontrado
//     } else {
//       return null; // Retorna null se o CarrinhoCompra não for encontrado
//     }
//   } catch (error) {
//     console.error('Erro ao buscar ID do CarrinhoCompra:', error);
//     throw error;
//   }
// }

// // Função para buscar o ID do Produto pelo nome no banco de dados
// async function buscarIdProdutoPorNome(nomeProduto) {
//   try {
//     // Use seu método de acesso ao banco de dados para buscar o ID pelo nome
//     const Produto = await ProdutoModel.findOne({ nome: nomeProduto });
//     if (Produto) {
//       return Produto._id; // Retorna o ID se o Produto for encontrado
//     } else {
//       return null; // Retorna null se o Produto não for encontrado
//     }
//   } catch (error) {
//     console.error('Erro ao buscar ID do Produto:', error);
//     throw error;
//   }
// }

// describe('CarrinhoCompraController', () => {
//   describe('#createCarrinhoCompra() CarrinhoCompra/create', () => {
//     it('Deve criar um novo CarrinhoCompra', async () => {
      
      
//     const mockCarrinhoCompraEnviado = {
//         userId:, // Referência ao usuário que possui o carrinho
//         produtos: [
//             {
//                 produtoId: { type: Schema.Types.ObjectId, ref: 'Produto', required: true }, // Referência ao produto no carrinho
//                 quantidade: { type: Number, default: 1 }, // Quantidade do produto
//             }
//         ],
//         total: { type: Number, default: 0 }, // Total do carrinho
//     }; 

//       const req = { body: mockCarrinhoCompraEnviado };

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
//        // Criando um objeto res simulado com propriedades dinâmicas
      
//       // console.log(req)
//       // console.log(res)
      
//       // Chama a função da controladora
//       await CarrinhoCompraController.createCarrinhoCompraPost(req,res);

//       // Verifica o status da resposta
//       assert.strictEqual(res.statusCode, 201); 

//       // Retira parametros não enviados e cria um novo objeto
//       const { _id, __v, imagem, ...CarrinhoCompraSemIdEV } = res.jsonData._doc;
      
//       assert.deepStrictEqual(CarrinhoCompraSemIdEV, mockCarrinhoCompraEnviado);

//     });
//   });

//   describe('CarrinhoCompraController', () => {
//     describe('#getCarrinhoCompra() CarrinhoCompra/id', () => {
//       it('Deve retornar o CarrinhoCompra pelo id', async () => {

//           // Nome do CarrinhoCompra p/ teste
//           const nomeCarrinhoCompra = 'CarrinhoCompra Teste 1';
  
//           // Busca o ID do CarrinhoCompra pelo nome
//           const idCarrinhoCompra = await buscarIdCarrinhoCompraPorNome(nomeCarrinhoCompra);
  
//           if (idCarrinhoCompra) {
//             // Cria a requisição com o ID do CarrinhoCompra
//             const req = { params: { id: idCarrinhoCompra } };
  
//             // Objeto de resposta simulado
//             const res = {
//               statusCode: null,
//               jsonData: null,
//               status(code) {
//                 this.statusCode = code;
//                 return this;
//               },
//               json(data) {
//                 this.jsonData = data;
//               }
//             };
  
//             // Chama a função do controlador para obter o CarrinhoCompra pelo ID
//             await CarrinhoCompraController.getCarrinhoCompra(req, res);
  
//             // Verifica se o CarrinhoCompra retornado tem o nome esperado
//             assert.strictEqual(res.jsonData.nome, nomeCarrinhoCompra);
//           } else {
//             console.log('CarrinhoCompra não encontrado');
//           }
//       });
//     });
//   });


//   // describe('CarrinhoCompraController', () => {
//   //   describe('#editCarrinhoCompraPost()', () => {
//   //     it('Deve editar um CarrinhoCompra existente', async () => {
      
//   //       // Nome do CarrinhoCompra p/ teste
//   //       const nomeCarrinhoCompra = 'TesteUser';

//   //       // Busca o ID do CarrinhoCompra pelo nome
//   //       const idCarrinhoCompra = await buscarIdCarrinhoCompraPorNome(nomeCarrinhoCompra);

//   //       // Suponha que você tenha os novos dados para atualização do CarrinhoCompra
//   //       const dadosAtualizados = {
//   //         nome: 'TesteUserUpdated',
//   //         sobrenome: 'Mocha',
//   //         idade: 35,
//   //         imagem: 'nova_imagem.jpg'
//   //       };

//   //       // Criando uma requisição falsa com os parâmetros necessários
//   //       const req = {
//   //         params: { id: idCarrinhoCompra },
//   //         body: dadosAtualizados
//   //       };

//   //       const res = {
//   //         statusCode: null,
//   //         jsonData: null,
//   //         status(code) {
//   //           this.statusCode = code;
//   //           return this;
//   //         },
//   //         json(data) {
//   //           this.jsonData = data;
//   //         }
//   //       };
        
//   //       // Chamando a função do controlador para editar o CarrinhoCompra
//   //       await CarrinhoCompraController.editCarrinhoCompraPost(req, res);

//   //       // Verificando se a resposta foi enviada corretamente
//   //       assert.strictEqual(res.statusCode, 200); // Verifica se o status é 200 (OK)

//   //       // Verificando se o CarrinhoCompra foi atualizado no banco de dados
//   //       const CarrinhoCompraAtualizado = await CarrinhoCompraModel.findById(idCarrinhoCompra);
//   //       assert.strictEqual(CarrinhoCompraAtualizado.nome, dadosAtualizados.nome); // Verifica se o nome foi atualizado corretamente
//   //       assert.strictEqual(CarrinhoCompraAtualizado.sobrenome, dadosAtualizados.sobrenome); // Verifica se o sobrenome foi atualizado corretamente
//   //       assert.strictEqual(CarrinhoCompraAtualizado.idade, dadosAtualizados.idade); // Verifica se a idade foi atualizada corretamente
//   //       assert.strictEqual(CarrinhoCompraAtualizado.imagem, dadosAtualizados.imagem); 
//   //     });
//   //   });
//   // });


// });

