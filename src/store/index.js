import Vue from "vue";
import Vuex from "vuex";

import items from "../products.json";

Vue.use(Vuex);

export default new Vuex.Store({

  // State.................................
  state: {
    products: [...items],

    cart: [],

    cartsUpdatedQty: [],
  },

  // Mutations.................................
  mutations: {

    //Add to the cart
    toCart(state, payload) {
      state.cart.push(payload);
    },

    // Update product's quantity
    addQty(state, payload) {
      if (!state.cartsUpdatedQty.includes(payload)) {
        state.cartsUpdatedQty.push(payload)
      } else {
        let object = state.cartsUpdatedQty.find(item => item.id === payload.id)
        object.quantity = payload.quantity;
      }
    },


    //Remove products from the cart
    removeProduct(state, payload) {
      state.cart.splice(payload, 1)





    }


  },

  // Actions........to manage mutations..............
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

  // Getters.............................................
  getters: {
    productsList: (state) => state.products,

    //Uses in app.vue for showing cart's item numbers
    cartsItems: (state) => state.cart,

    //Uses in checkout.vue for building dynamic cards.
    cartsObj: (state) => state.cart.map(id => state.products.find(product => product.id == id)),



    //Uses in checkout.vue for updating qty of items in clients sides.
    // getQuantity: (state) => state.cartsUpdatedQty






  },


});
