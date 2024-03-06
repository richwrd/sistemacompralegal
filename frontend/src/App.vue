<template>
  <NavBar/>
  <img alt="Loja" src="./assets/loja.png">
  <Logo msg="Seja Bem-Vindo ao Compra Legal"/>
  <TelaProduto/>
</template>

<script>
import NavBar from './components/Navbar.vue'
import TelaProduto from './views/Produto.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TelaProduto
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>./components/Logo.vue
