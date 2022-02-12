<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="logo-in-route"
        ><img class="sinus-logo" src="@/assets/sinus_logo.svg" alt="Sinus logo"
      /></router-link>
      <div class="nav-pages">
        <router-link to="/">Home</router-link>
        <router-link to="/ProductGallery">Products</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Contact">Contact</router-link>
        <!-- <router-link to="/Product">Product</router-link> -->
      </div>
      <div class="user-action">
        <input type="text" placeholder="Search..." />
        <router-link to="/Login"
          ><img class="avatar" src="@/assets/login.svg" alt="login-avatar"
        /></router-link>
        <router-link class="checkout" to="/Checkout">
          <span>{{ inCart.length }}</span>
          <img class="cart" src="@/assets/cart.svg" alt="Cart"
        /></router-link>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "../src/components/Footer.vue";
export default {
  components: { Footer },

  computed: {
    ...mapGetters({ inCart: "cartsItems" }),
  },
};
</script>

<style lang="scss">
html body {
  background-color: #fcfcf8;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  width: 100%;
  height: 56px;
  background-color: rgba(196, 21, 20, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  .logo-in-route{
    margin-top: 4px;
  };

  .sinus-logo {
    width: 120px;
    height: 48px;
    margin-left: 16px;
  }

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #0000ffc7;
    }
  }

  .nav-pages {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0px 12px;
      font-size: 0.8rem;
      text-decoration: none;
    }
  }

  .user-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
    input {
      padding: 0px 5px;
      width: 152px;
      height: 18px;
      border: none;
      border-radius: 2px;
    }

    a {
      margin: 0px 12px;
    }
    .avatar {
      width: 18px;
      height: 18px;
    }
    .checkout {
      position: relative;

      .cart {
        width: 30px;
        height: 30px;
      }
      span {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: -6px;
        color: #fff;
        font-size: 0.6rem;
        border-radius: 100%;
        background-color: #000;
      }
    }
  }
}
</style>
