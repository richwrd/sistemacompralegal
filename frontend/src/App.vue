<template>
  <router-view></router-view> <!-- Renderiza a NavBar -->
  <router-view name="telaHome"></router-view>

  <router-view name="telaLogin"></router-view>
  <router-view name="telaRegister"></router-view>
  
  <router-view name="telaSobre"></router-view>
  <router-view name="telaProduto"></router-view>
  
  <router-view name="telaAtualizaProduto"></router-view>
  <router-view name="telaCadastroProduto"></router-view>
  <router-view name="telaDeletaProduto"></router-view>
  
  <router-view name="alertSuccess"></router-view>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fbfbfb;
}
</style>
