import Vue from "vue";
import Vuex from "vuex";

import items from "../products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [...items],
    productsList: [],
  },
  mutations: {
    toCart(state, payload) {
      state.productsList.push(payload);
    },
  },
  actions: {
    toCart(context, payload) {
      context.commit("productsList", payload);
    },
  },

  getters: {
    productsList: (state) => state.products,
  },

  // modules: {
  // },
});
