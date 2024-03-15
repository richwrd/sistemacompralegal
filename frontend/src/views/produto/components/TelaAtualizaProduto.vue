<template>
  <div class="product-form">
    <h2 class="title">Atualização de Produto</h2>
    <form @submit.prevent="atualizarProduto">
      <div class="flex-container">
        <div class="image-container">
          <img v-if="produto.imagem" :src="produto.imagem" alt="Imagem do Produto">
        </div>

        <div class="fields-container">
          <label class="label" for="nome">Nome do Produto:</label>
          <input class="input" type="text" id="nome" v-model="produto.nome" required>

          <label class="label" for="preco">Preço:</label>
          <input class="input" type="number" id="preco" v-model="produto.preco" required>

          <label class="label" for="imagem">Imagem:</label>
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

      <button type="submit">Atualizar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TelaAtualizaProduto',
  data() {
    return {
      produto: {
        id: this.$route.params.id, // Recebe o ID do produto da rota
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
  created() {
    this.carregarProduto();
  },
  methods: {
    // async carregarProduto() {
    //   try {
    //     const response = await axios.get(`http://localhost:3000/produto/${this.produto.id}`);
    //     this.produto = response.data; // Atualiza os dados do produto com os recebidos do servidor
    //   } catch (error) {
    //     console.error('Erro ao carregar o produto:', error);
    //   }
    // },
    async carregarProduto() {
      try {
        if (!this.produto.id) {
          console.error('ID do produto não definido.');
          console.log(this.produto.id)
          return;
        }
        const response = await axios.get(`http://localhost:3000/produto/${this.produto.id}`);
        this.produto = response.data;
      } catch (error) {
        console.error('Erro ao carregar o produto:', error);
      }
    },
    async atualizarProduto() {
      try {
        await axios.put(`http://localhost:3000/produto/edit/${this.produto._id}`);
        console.log('Produto atualizado com sucesso!', this.produto._id);
      } catch (error) {
        console.error('Erro ao atualizar o produto:', error);
      }
    }
  }
};
</script>


<style scoped>
.title {
  font-size: 50px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.product-form {
  max-width: 1500px;
  margin: 0 auto;
}

.flex-container {
  display: flex;
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
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 20px;
  align-items: start;
  transition: border-color .3s cubic-bezier(.25, .01, .25, 1) 0s, color .3s cubic-bezier(.25, .01, .25, 1) 0s, background .2s cubic-bezier(.25, .01, .25, 1) 0s;
  margin-bottom: 30px;
}

.input:hover,
.input:focus {
  outline: none;
  border-color: #05060f;
}

.label{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

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
  background: rgb(2, 0, 36);
  color: white;
  border-radius: 4px;
  margin-top: 10px;
}

button:hover {
  background: rgb(248, 179, 50);
}

button:active {
  transform: translate(0em, 0.2em);
}
</style>
