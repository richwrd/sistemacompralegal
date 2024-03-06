<template>
  <NavBar/>
  <img alt="Loja" src="./assets/loja.png">
  <TelaSobre msg="Seja Bem-Vindo ao Compra Legal"/>
  <TelaHome/>
</template>

<script>
import NavBar from './components/Navbar.vue'
import TelaSobre from './components/Sobre.vue'
import TelaHome from './views/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TelaSobre,
    TelaHome
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
