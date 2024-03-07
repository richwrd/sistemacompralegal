import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/Navbar.vue";
import telaProduto from "../views/Produto.vue"
import telaHome from "../views/Home.vue"
import telaSobre from "../components/Sobre.vue"

const routes = [
  {
    path: '/home',
    name: 'Home',
    components: {
      default: NavBar, // Renderiza a NavBar como componente padrão
      telaHome: telaHome

    }
  },
  {
    path: '/produto',
    name: 'Produto',
    components: {
      default: NavBar, // Renderiza a NavBar como componente padrão
      telaProduto: telaProduto
    }
  },
  {
    path: '/sobre',
    name: 'Sroduto',
    components: {
      default: NavBar, // Renderiza a NavBar como componente padrão
      telaSobre: telaSobre
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;