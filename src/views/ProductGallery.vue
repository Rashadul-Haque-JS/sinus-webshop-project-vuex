<template>
  <div class="wrapper">
    <h2>Lorem, ipsum.</h2>
    <div class="gallery">
      <div class="side-bar">
        <h3>OFFERS</h3>
      </div>
      <div class="product-list">
        <router-link
          :to="'/products/' + product.id"
          v-for="product in products"
          :key="product.id"
        >
          <ProductsCardFroList :product="product" />
        </router-link>
      </div>
    </div>
 
  </div>
</template>

<script>
import ProductsCardFroList from "../components/ProductsCardForList.vue";

import { mapGetters } from "vuex";
export default {
  components: { ProductsCardFroList},
  data() {
    return {};
  },

  computed: {
    ...mapGetters({ products: "productsList" }),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}
.wrapper {
  h2 {
    text-align: start;
    margin: 24px 0px 0px 72px;
  }

  a{
    text-decoration:none;
  }

  .gallery {
  display: grid;
  grid-template-columns: 5fr 1fr;

  margin-left: 72px;

  .side-bar {
    grid-column: 2/3;
    background-color: #07326b;
    margin-top: 32px;
    grid-row: 1/3;
  }

  .product-list {
    grid-column: 1/2;
    display: grid;
    grid-row: 1/3;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 60px;
    margin: 32px 0px;
  }

  .footer {
    margin-top: 196px;
  }
}
}

</style>