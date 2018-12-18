
import Vue from 'vue';
import Vuex from 'vuex';
import items from './modules/items';
// import user from './modules/user';



Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    itemManager: items,
    // userManager: user,
  },
  strict: debug,
});
