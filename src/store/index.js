import Vue from 'vue';
import Vuex from 'vuex';

import items from '../products.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [...items],
    productsView:[],
    
  },
  mutations: {
    productView(state, payload) {
      state.productsView.push(payload)
    }
  },
  actions: {
    productView(context, payload) {
      context.commit("productView", payload)
    }
  },

  getters: {
    viewProduct: state => state.productsView[state.productsView.length -1],
    productsList: state => state.products,
  
  },

  modules: {
  },
});
