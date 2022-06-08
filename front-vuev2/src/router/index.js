import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/login-called/LoginComponent'),
  },
  {
    path: '/create-called',
    name: 'called',
    component: () => import('../components/pages/create-called/CreateCalledComponent'),
  },
  {
    path: '/list-called',
    name: 'list',
    component: () => import('../components/pages/list-called/ListCalledComponent'),
  },
  {
    path: '/edit-called/:id',
    name: 'update',
    component: () => import('../components/pages/edit-called/EditCalledComponent'),
  },
  {
    path: '/create-user',
    name: 'create',
    component: () => import('../components/pages/create-user/CreateUserComponent'),
  },
  {
    path: '/create-user-tecnico',
    name: 'tecnico',
    component: () => import('../components/pages/create-user-tecnico/CreateUserTecnicoComponent'),
  },
  {
    path: '/login-user-tecnico',
    name: 'ltecnico',
    component: () => import('../components/pages/login-user-tecnico/LoginTecnicoComponent'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completando a animação da rota do NProgress
  NProgress.done();
});

export default router;
