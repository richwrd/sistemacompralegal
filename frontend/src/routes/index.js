import { createRouter, createWebHistory } from 'vue-router';

//  COMPONENT
import NavBar from './../components/Navbar.vue';

//  VIEWS
import telaHome from './../views/Home.vue';
import telaSobre from './../views/Sobre.vue';

import telaProduto from './../views/produto/TelaListProduto.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    components: {
      default: NavBar,
      telaHome: telaHome
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    components: {
      default: NavBar,
      telaSobre: telaSobre
    }
  },
  {
    path: '/produtos',
    name: 'Produto',
    components: {
      default: NavBar,
      telaProduto: telaProduto
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;