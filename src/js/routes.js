import HomePage from '../pages/home.vue';
import Todos from '../pages/todos.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/todos/',
    component: Todos,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
