import HomePage from '../pages/home.vue';
import Todos from '../pages/todos.vue';
import ComponentTemplate from '../pages/component-template.vue';
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
    path: '/components/',
    component: ComponentTemplate,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
