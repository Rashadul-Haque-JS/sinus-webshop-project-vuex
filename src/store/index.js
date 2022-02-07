import Vue from 'vue';
import Vuex from 'vuex';

import items from '../products.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [...items]
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
