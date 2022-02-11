import Vue from "vue";
import Vuex from "vuex";

import items from "../products.json";

Vue.use(Vuex);

export default new Vuex.Store({

  // STATE.................................
  state: {
    products: [...items],

    cart: [],

    cartsUpdatedQty: [],




  },

  // MUTATIONS.................................
  mutations: {
    toCart(state, payload) {
      state.cart.push(payload);
    },

    addQty(state, payload) {
      if (!state.cartsUpdatedQty.includes(payload.id)) {
        state.cartsUpdatedQty.push(payload)
      } else {
        state.cartsUpdatedQty.payload.quantity[payload.quantity]

      }

    },

    removeProduct(state, payload) {
      state.cart.splice(payload, 1)
    }


  },

  // ACTIONS.............................................
  actions: {
    toCart(context, payload) {
      if (!context.state.cart.includes(payload)) {
        context.commit("toCart", payload)
      } else { alert('This item already in the cart!') }

    },

    addQty(context, payload) {
      context.commit("addQty", payload)
    },

    removeProduct(context, payload) {
      context.commit("removeProduct", payload)
    }


  },

  // GETTERS.............................................
  getters: {
    productsList: (state) => state.products,
    cartsItems: (state) => state.cart,

    cartsObj: (state) => state.cart.map(id => state.products.find(product => product.id == id)),

    getQuantity(state) {
      let unqObj = new Set(state.cartsUpdatedQty)
      return unqObj
    },






  },


});
