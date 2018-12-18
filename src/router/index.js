import Vue from 'vue';
import Router from 'vue-router';
import Item from '@/components/item';
// import Login from '@/components/login';
import ListItems from '@/components/views/list-items';

import store from '@/store/index';

import UpdateItem from '@/components/forms/update-item';


Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/login',
    //   component: Login,
    //   props: (route) => {
    //     const user = store.getters.user;
    //     return { user };
    //   }
    // },
    {
      path: '/item/:id',
      component: Item,
      props: (route) => {
        const item = store.getters.itemById(route.params.id);
        return { item };
      }
    },
    {
      path: '/item/:id/edit',
      component: UpdateItem,
      props: (route) => {
        const item = Object.assign({}, store.getters.itemById(route.params.id));
        return { item, mode: 'update' };
      }
    },
    {
      path: '/items/new',
      component: UpdateItem,
      props: () => {
        return { mode: 'add' };
      }
    },
    {
      path: '/items',
      component: ListItems,
      props: () => {
        return { items: store.getters.allItems };
      }
    },
  ],
});
