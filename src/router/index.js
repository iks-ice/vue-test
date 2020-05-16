import Vue from 'vue';
import VueRouter from 'vue-router';

import Users from '../components/Users';
import SelectedUsers from '../components/SelectedUsers';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/selected',
    name: 'SelectedUsers',
    component: SelectedUsers
  }
]

const router = new VueRouter({
  routes
})

export default router
