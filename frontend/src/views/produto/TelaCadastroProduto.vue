<template>
  <div class="product-form">
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="cadastrarProduto">
      <label for="nome">Nome do Produto:</label>
      <input type="text" id="nome" v-model="produto.nome" required>

      <label for="preco">Preço:</label>
      <input type="number" id="preco" v-model="produto.preco" required>

      <label for="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" v-model="produto.quantidade" required>

      <label for="descricao">Descrição:</label>
      <textarea id="descricao" v-model="produto.descricao" required></textarea>

      <label for="imagem">Imagem:</label>
      <input type="imagem" id="imagem" v-model="produto.imagem">

      <label for="tipo">Tipo:</label>
      <input type="text" id="tipo" v-model="produto.tipo" required>

      <label for="categoria">Categoria:</label>
      <input type="text" id="categoria" v-model="produto.categoria" required>

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'TelaCadastroProduto',
  data() {
    return {
      produto: {
        nome: '',
        preco: '',
        quantidade: '',
        imagem: '',
        descricao: '',
        tipo: '',
        categoria: ''
      }
    };
  },
  methods: {
    async cadastrarProduto() {
      try {
        // Envia os dados para o backend
        await axios.post('http://localhost:3000/produto/create', this.produto);
        console.log('Produto cadastrado com sucesso!', this.produto);
        // Limpa os campos após o cadastro (opcional)
        this.produto = {
          nome: '',
          preco: '',
          quantidade: '',
          descricao: '',
          imagem: '',
          tipo: '',
          categoria: ''
        };
      } catch (error) {
        console.error('Erro ao cadastrar o produto:', error.message);
      }
    }
  },
};
</script>

<style scoped>
.product-form {
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}

.product-form label {
  display: block;
  margin-top: 15px;
}

.product-form input,
.product-form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.product-form button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.product-form button:hover {
  background-color: #45a049;
}
</style>
