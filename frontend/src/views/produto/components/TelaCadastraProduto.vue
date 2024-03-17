<template>
  <div class="product-form">
    <h2 class="title">Cadastro de Produto</h2>
    <div class="alert-card-container">
      <div v-if="produtoCadastrado" class="alert-card" :class="{ 'show-alert': produtoCadastrado }">
        <AlertSuccess />
      </div>
    </div>
    <form @submit.prevent="cadastrarProduto">
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

      <button type="submit" class="submit-button">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import AlertSuccess from '@/components/AlertSuccess.vue';

export default {
  name: 'TelaCadastroProduto',
  components: {
    AlertSuccess
  },
  data() {
    return {
      produtoCadastrado: false,
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
        this.produtoCadastrado = true;
        // Limpa os campos após o cadastro
        console.log(this.produto);
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