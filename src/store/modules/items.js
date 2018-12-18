import utils from '@/utils';

const axios = require('axios');
const url = "/";
// initial state
const state = {
  items: [utils.getEmptyItem()],
  checkoutStatus: null,
  user: { name: 'ben', password: 'ben' },
};

// getters
const getters = {
  allItems: state => state.items,
  itemById: state => id => state.items.find(item => item.id === id),
  user: state => (state.user),

};

// actions
const actions = {
  pullItemsFromServer(context) {
    axios.get(`${url}items`)
      .then((response) => {
        console.log("items", response.data.items);
        context.commit('setItems', response.data.items);
      })
      .catch(error => console.error(error));
  },
};

// mutations
const mutations = {

  setItems(state, items) {
    state.items = items;
  },

  pushItem(state, item) {
    state.items.push(item);
    console.log("ici", state.user)
    axios.post(`${url}push-item`, {
      user: state.user,
      item,
    });
  },

  popItem(state, id) {
    state.items = state.items.filter(item => item.id !== id);
    axios.post(`${url}pop-item`, {
      user: state.user,
      id,
    });({ name: 'ben', password: 'ben' })
  },

  updateItem(state, id, data) {
    const itemIndex = state.items.findIndex(item => item.id === id);
    if (itemIndex < 0) return;
    Object.assign(state.items[itemIndex], data);
    // computeTime(state.items[itemIndex]);
    axios.post(`${url}push-item`, {
      user: state.user,
      item: state.items[itemIndex],
    });
  },

};

export default {
  state,
  getters,
  actions,
  mutations,
};
