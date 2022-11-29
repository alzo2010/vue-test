import {createRouter, createWebHistory} from 'vue-router';
import loginPage from '../pages/login/index.vue';
import homePage from '../pages/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/test',
    name: 'testPage',
    component: loginPage
  },

]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})