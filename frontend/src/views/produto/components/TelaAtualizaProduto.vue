<template>
  <div class="product-form">
    <h2 class="title">Atualização de Produto</h2>
    <div class="alert-card-container">
      <div v-if="produtoAtualizado" class="alert-card" :class="{ 'show-alert': produtoAtualizado }">
        <AlertSuccess />
      </div>
    </div>
    <form @submit.prevent="atualizarProduto">
      <div class="flex-container">
        <div class="image-container">
          <img v-if="produto.imagem" :src="produto.imagem" alt="Imagem do Produto">
        </div>

        <div class="fields-container">
          <label class="label" for="nome">Nome do Produto:</label>
          <input class="input" type="text" id="nome" v-model="produto.nome" required>

          <label class="label" for="preco">Preço:</label>
          <input class="input" type="text" id="preco" v-model="produto.preco" required>

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
      <button type="submit" class="submit-button">Atualizar</button>
      <button type="submit" class="submit-button" @click="deletarProduto">Deletar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import AlertSuccess from '@/components/AlertSuccess.vue';

export default {
  name: 'TelaAtualizaProduto',
  components: {
    AlertSuccess
  },
  data() {
    return {
      produtoAtualizado: false,
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
    async carregarProduto() {
      try {
        if (!this.produto.id) {
          console.error('ID do produto não definido.');
          console.log(this.produto.id);
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
        const response = await axios.put(`http://localhost:3000/produto/edit/${this.produto._id}`, this.produto);
        console.log('Produto atualizado com sucesso!', this.produto._id);
        this.produto = response.data;
        this.produtoAtualizado = true;
      } catch (error) {
        console.error('Erro ao atualizar o produto:', error);
      }
    },
    async deletarProduto() {
      try {
        const response = await axios.delete(`http://localhost:3000/produto/remove/${this.produto._id}`);
        console.log('Produto deleteado com sucesso!', this.produto._id);
        this.produto = response.data;
        this.produtoAtualizado = true;
      } catch (error) {
        console.error('Erro ao deletar o produto:', error);
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
}

.input {
  width: 100%;
  height: 44px;
  background-color: #05060f1a;
  border-radius: .5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 20px;
  margin-bottom: 30px;
}

.input:hover,
.input:focus {
  outline: none;
  border-color: #05060f;
}

.label {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.input:hover+.label,
.input:focus+.label {
  color: #05060fc2;
  font-weight: bolder;
}

textarea {
  max-height: max-content;
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
  display: inline-flex;
  margin-right: 20px;
}

button:hover {
  background: rgb(248, 179, 50);
}

button:active {
  transform: translate(0em, 0.2em);
}

.alert-card {
  display: inline-block;
  position: relative;
}

@keyframes slideIn {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100);
  }
}

@keyframes slideOut {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}

.alert-card {
  display: inline;
  position: absolute;
  left: 77%;
  animation: slideIn 1s forwards;
  animation: fadeInOut 3s forwards;
  padding: 40px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
