<template>
  <NavBar/>
  <!-- <img alt="Loja" src="./assets/loja.png"> -->
  <!-- <TelaSobre msg="Seja Bem-Vindo ao Compra Legal"/>
  <TelaHome/> -->


  <TelaUsuario/>

</template>

<script>
import NavBar from './components/Navbar.vue'
// import TelaSobre from './views/Sobre.vue'
// import TelaHome from './views/Home.vue'
import TelaUsuario from './views/TelaUsuario.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    // TelaSobre,
    // TelaHome
    TelaUsuario
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
</style>./components/Logo.vue./views/Sobre.vue./views/TelaUsuario.vue
