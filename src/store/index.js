import Vue from "vue";
import Vuex from "vuex";

import items from "../products.json";

Vue.use(Vuex);

export default new Vuex.Store({

  // STATE.................................
  state: {
    products: [...items],

    cart: [],

    qty: [],




  },

  // MUTATIONS.................................
  mutations: {
    toCart(state, payload) {
      state.cart.push(payload);
    },

    addQty(state, payload) {

      state.qty.push(payload)

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
      if (!context.state.qty.includes(payload.obj.id)) {
        context.commit("addQty", payload)
      } else {
        context.commit('addQty', payload.quantity)

      }

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
      let unqObj = new Set(state.qty)
      return unqObj
    }




  },


});
