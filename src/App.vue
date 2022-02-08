<template>
  <div id="app">
    <div id="nav">
      <img class="sinus-logo" src="@/assets/sinus_logo.svg" alt="Sinus logo" />
      <div class="nav-pages">
        <router-link to="/">Home</router-link>
        <router-link to="/ProductGallery">Products-Gallery</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Contact">Contact</router-link>
        <router-link to="/Product">Product</router-link>
      </div>
      <div class="user-action">
        <input type="text" placeholder="Search..." />
        <router-link to="/Login"
          ><img class="avatar" src="@/assets/login.svg" alt="login-avatar"
        /></router-link>
        <router-link to="/Checkout"
          ><img class="cart" src="@/assets/cart.svg" alt="Cart"
        /></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
html body{
  background-color: #FCFCF8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  width: 100%;
  height: 84px;
  background-color: rgba(196, 21, 20, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sinus-logo {
    width: 184px;
    height: 80px;
    margin-left: 24px;
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
    }
  }

  .user-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
    input {
      padding: 0px 5px;
      width: 208px;
      height: 24px;
      border: none;
      border-radius: 4px;
    }

    a {
      margin: 0px 12px;
    }
    .avatar {
      width: 24px;
      height: 24px;
    }

    .login {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
