<template>
  <div class="wrap">
    <div class="information" v-if="!inCart.length">
      <span>Your shopping cart is empty.</span>
    </div>

    <div class="checkout-wrapper">
      <article class="cart-items">
        <div v-for="(item, idx) in inCart" :key="item.id" :idx="idx">
          <CartsSingleItem :item="item" :idx="idx" />
        </div>
      </article>
      <article v-if="inCart.length" class="payment">
        <div class="extra">
          <img src="../assets/sustainability.svg" alt="sust-img">
        </div>
        <div class="payment-details">
          <p v-for="el in inCartQty" :key="el.id">
            <strong>PRICE :</strong>
            <strong>{{ el.price * el.quantity }}</strong>
          </p>
          <p> <strong>VAT :</strong></p>
          <p><strong>DISCOUNT :</strong></p>
        </div>
        <div class="payment-action">
          <h3>Lorem ipsum</h3>
          <div class="action-sub">
            <button class="pay-now">Checkout</button>
            <router-link to="/ProductGallery">Back to shop</router-link>
          </div>
        </div>
      </article>
    </div>
    <div class="misc-block">
      <h2>THIS BLOCK IS RESERVED FOR FUTURE UPDATES......</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartsSingleItem from "../components/CartsSingleItem.vue";

export default {
  components: { CartsSingleItem },
  computed: {
    ...mapGetters({ inCart: "cartsObj", inCartQty: "getQuantity" }),
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: block;

  .information {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    height: 300px;
  }

  .checkout-wrapper {
    display: flex;
    justify-content: space-between;

    .cart-items {
      display: block;
      margin-left: 24px;
    }

    .payment {
      width: 288px;
      height: 550px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      padding: 12px;
      margin: 32px 68px 0px 8px;

      .extra {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      .payment-details {
        width: 100%;
        max-height: 50px;
        text-align: start;

        p {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        
        }
      }

      .payment-action {
        width: 100%;
        height: 300px;
        margin-top: 80px;
        border-top: solid 1px #545454;

        .action-sub {
          display: flex;
          flex-direction: column;
          margin-top: 80px;
          .pay-now {
            padding: 5px 16px;
            background-color: #1c1c1c;
            color: #fff;
            cursor: pointer;
          }

          a {
            padding: 5px 16px;
            text-decoration: none;
            text-align: center;
            margin-top: 16px;
            border: solid 2px #1c1c1c;
          }
        }
      }
    }
  }
  .misc-block {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 300px;
    font-size: 0.8rem;
    background-color: #c0bebe;
    margin: 196px 0px;

    h2 {
      margin-top: 64px;
    }
  }
}
</style>