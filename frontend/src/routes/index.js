import { createRouter, createWebHistory } from 'vue-router';

//  COMPONENT
import NavBar from './../components/Navbar.vue';

//  VIEWS
import telaHome from './../views/Home.vue';
import telaSobre from './../views/Sobre.vue';

import telaProduto from '../views/produto/TelaProduto.vue';
import telaCadastroProduto from '../views/produto/components/TelaCadastraProduto.vue';
import telaAtualizaProduto from '../views/produto/components/TelaAtualizaProduto.vue';

import telaLogin from './../views/TelaLogin.vue';
import telaRegister from './../views/TelaRegister.vue';


// Middleware de autenticação (da pra fazer diferenciado, para diferentes tipos de acessos pedir login)

const authMiddleware = (to, from, next) => {
  // Verifica se o usuário está autenticado
  const isAuthenticated = localStorage.getItem('usuario') !== null;

  // Se o usuário estiver autenticado, permita o acesso à rota
  if (isAuthenticated || to.path === '/auth/login' || to.path === '/auth/register') {
    next();
  } else {
    // Caso contrário, redirecione para a página de login
    next('/auth/login');
  }
};



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
    },
    // Definindo o middleware Auth (verificacao de login)
    beforeEnter: authMiddleware
  },
  {
    path: '/auth/login',
    name: 'Compre Legal - Login',
    components: {
      default: NavBar,
      telaLogin: telaLogin
    },
    meta: {
      title: 'Fazer Login'
    }
  },
  {
    path: '/auth/register',
    name: 'Compre Legal Login',
    components: {
      default: NavBar,
      telaRegister: telaRegister
    },
    meta: {
      title: 'Registre-se!'
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
  },
  {
    path: '/produtos/Atualiza/:id',
    name: 'telaAtualizaProduto',
    components: {
      default: NavBar,
      telaAtualizaProduto: telaAtualizaProduto
    },
    meta: {
      title: 'Atualiza'
    }
  },
  {
    path: '/produtos/cadastro/',
    name: 'telaCadastroProduto',
    components: {
      default: NavBar,
      telaCadastroProduto: telaCadastroProduto
    },
    meta: {
      title: 'Cadastro' 
    }
  },
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