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
    },
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    components: {
      default: NavBar,
      telaSobre: telaSobre
    },
    meta: {
      title: 'Sobre'
    }
  },
  {
    path: '/produtos',
    name: 'Produto',
    components: {
      default: NavBar,
      telaProduto: telaProduto
    },
    meta: {
      title: 'Produtos'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Compre Legal';
  next();
});

export default router;