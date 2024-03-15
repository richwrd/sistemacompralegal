<template>
    <div class="product-form">
      <h2 class="title">Cadastro de Produto</h2>
      <form @submit.prevent="cadastrarProduto">
        <div class="flex-container">
          <div class="image-container">
            <img v-if="produto.imagem" :src="produto.imagem" alt="Imagem do Produto">
          </div>
  
          <div class="fields-container">
            <label class="label" for="nome">Nome do Produto:</label>
            <input class="input" type="text" id="nome" v-model="produto.nome" required>
  
            <label class="label" for="preco">Preço:</label>
            <input class="input" type="number" id="preco" v-model="produto.preco" required>
  
            <label class="label">Imagem:</label>
            <input class="input" type="text" id="imagem" v-model="produto.imagem">
  
            <label class="label" for="quantidade">Quantidade:</label>
            <input class="input" type="number" id="quantidade" v-model="produto.quantidade" required>
  
            <label class="label" for="descricao">Descrição:</label>
            <textarea class="input" id="descricao" v-model="produto.descricao" required></textarea>
  
            <label class="label" for="tipo">Tipo:</label>
            <input class="input" type="text" id="tipo" v-model="produto.tipo" required>
  
            <label class="label" for="categoria">Categoria:</label>
            <input class="input" type="text" id="categoria" v-model="produto.categoria" required>
          </div>
        </div>
  
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
  
  .title{
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  .product-form {
    max-width: 800px;
    /* Defina o máximo desejado para o formulário */
    margin: 0 auto;
    /* Centraliza o formulário na tela */
  }
  
  .flex-container {
    display: flex;
    align-items: center;
    /* Alinha os itens ao topo */
  }
  
  
  .image-container {
    margin-right: 40px;
    /* Adiciona um espaçamento entre a imagem e os campos */
  }
  
  .input {
    width: 100%;
    /* Definir a largura para 100% para ocupar toda a largura disponível */
    height: 44px;
    background-color: #05060f0a;
    border-radius: .5rem;
    padding: 0 1rem;
    border: 2px solid transparent;
    font-size: 1rem;
    margin: 20px;
    align-items: start;
    transition: border-color .3s cubic-bezier(.25, .01, .25, 1) 0s, color .3s cubic-bezier(.25, .01, .25, 1) 0s, background .2s cubic-bezier(.25, .01, .25, 1) 0s;
  }
  
  .input:hover,
  .input:focus {
    outline: none;
    border-color: #05060f;
  }
  
  .label,
  .input:hover+.label,
  .input:focus+.label {
    color: #05060fc2;
    font-weight: bolder;
  }
  
  .form {
    align-items: center;
  }
  
  img {
    display: block;
    max-width: 500px;
    height: 400px;
  }
  
  button {
    font-size: 24px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: dodgerblue;
    color: white;
    border-radius: 4px;
    margin-top: 10px;
  }
  
  button:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(30, 144, 255, 1) 0%, rgba(0, 212, 255, 1) 100%);
  }
  
  button:active {
    transform: translate(0em, 0.2em);
  }
  </style>