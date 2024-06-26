import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';

//  COMPONENT
import NavBar from './../components/Navbar.vue';

//  VIEWS
import telaHome from './../views/Home.vue';
import telaSobre from './../views/Sobre.vue';

import telaListProduto from '../views/produto/TelaListProduto.vue';
import telaCadastroProduto from '../views/produto/components/TelaCadastraProduto.vue';
import telaAtualizaProduto from '../views/produto/components/TelaAtualizaProduto.vue';

import telaLogin from './../views/TelaLogin.vue';
import telaRegister from './../views/TelaRegister.vue';
import telaEditUser from './../views/usuario/TelaMinhaConta.vue';



// Middleware de autenticação (da pra fazer diferenciado, para diferentes tipos de acessos pedir login)

const authMiddleware = async (to, from, next) => {

  const authorizationStorage = localStorage.getItem('acessToken');

  // Se o usuário estiver autenticado, permita o acesso à rota

  if (authorizationStorage) {

    const config = {
      headers: {
        'authorization': `Bearer ${authorizationStorage}`
      },
      timeout: 5000 // Tempo limite em milissegundos (por exemplo, 5 segundos)
    };
    

    try {
      const response = await axios.post('http://localhost:3000/auth/verify', null, config);

      if (response.status === 200) {
        console.log('Token verificado com sucesso:', response.data);
        next();
      }
    } catch (error) {
      console.error('Falha ao verificar o token:', error);
      // Caso contrário, redirecione para a página de login
      next('/auth/login');
    }
  } else {
    // Se não houver token de acesso, redirecione para a página de login
    next('/auth/login');
  }

};

const authMiddlewareLogin = (to, from, next) => {
  // Verifica se o usuário NÃO está autenticado
  const isNotAuthenticated = localStorage.getItem('acessToken') == null;

  // Se o usuário NÃO estiver autenticado, permita o acesso à rota
  if (isNotAuthenticated) {
    next();
  } else {
    // Caso contrário, redirecione para a página de login
    next('/');
  }
};




const routes = [
  {
    path: '/',
    name: 'Home',
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
    },
    // Definindo o middleware Auth (verificacao de login)
    beforeEnter: authMiddlewareLogin
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
    name: 'Produtos',
    components: {
      default: NavBar,
      telaListProduto: telaListProduto
    },
    meta: {
      title: 'Produtos'
    }
  },
  {
    path: '/produtos/edit/:id',
    name: 'telaAtualizaProduto',
    components: {
      default: NavBar,
      telaAtualizaProduto: telaAtualizaProduto
    },
    meta: {
      title: 'Atualiza'
    },
    beforeEnter: authMiddleware
  },
  {
    path: '/produto/create',
    name: 'telaCadastroProduto',
    components: {
      default: NavBar,
      telaCadastroProduto: telaCadastroProduto
    },
    meta: {
      title: 'Cadastro' 
    },
    beforeEnter: authMiddleware
  },
  {
    path: '/usuario/edit/:id',
    name: 'telaEditUser',
    components: {
      default: NavBar,
      telaEditUser: telaEditUser
    },
    meta: {
      title: 'Minha Conta'
    },
    beforeEnter: authMiddleware
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