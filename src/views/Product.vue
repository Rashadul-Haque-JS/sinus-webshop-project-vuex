<template>
  <div class="wrapper">
    <div class="product-images">
      <article class="small-images">
        <ProductAngle :product="product" />
        <!-- <ProductAngle :product="product" />
        <ProductAngle :product="product" />
        <ProductAngle :product="product" />
        <ProductAngle :product="product" /> -->
      </article>
      <article class="large-image" v-if="product">
        <img
          class="single-product"
          :src="require(`../assets/${product.itemImg}.svg`)"
        />
      </article>
    </div>
    <div class="product-details">
      <h1>Product's Information</h1>
      <h2>{{ product.name }}</h2>
      <p>Sizes: {{ " " + product.size }}</p>
      <h3>{{ product.currency.local }} {{ product.price }}</h3>
      <p class="descriptions">
        <strong>Description:</strong
        ><span>{{ " " + product.descriptions }}</span>
      </p>

      <p class="descriptions">
        <strong>Specifications:</strong
        ><span>{{ " " + product.descriptions }}</span>
      </p>

      <p class="descriptions">
        <strong>Customer review:</strong
        ><span>{{ " " + product.descriptions }}</span>
      </p>

      <p class="descriptions">
        <strong>Delivery info:</strong
        ><span>{{ " " + product.descriptions }}</span>
      </p>

      <div class="action">
        <button @click="addToCart">ADD TO CART</button>
        <router-link to="/ProductGallery">BACK</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAngle from "../components/ProductsAngleImg.vue";
export default {
  components: { ProductAngle },
  computed: {
    product() {
      return this.$store.getters.productsList.find(
        (product) => product.id == this.$route.params.id
      );
    },

    methods: {
      addToCart() {
        this.$store.state.dispatch("toCart", this.product.id);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  //   margin: 0;
  //   padding: 0;
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .product-images {
    display: flex;
    justify-content: space-between;
    margin: 100px 20px 0px 20px;
    position: relative;

    .small-images {
     
     
    }

    .large-image {
      width: 526px;
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 200px;
      margin-top: 24px;
     
      .single-product {
        width: 400px;
        height: 420px;
      }
    }
  }
  .product-details {
    
    margin: 100px 20px 0px 200px;
    .descriptions {
      span {
        display: block;
      }
    }

    .action {
      display: flex;
      flex-direction: column;
      margin-top: 48px;

      button {
        padding: 8px 0px;
        background-color: #1c1c1c;
        color: #fff;
      }
      a {
        text-decoration: none;
        text-align: center;
        margin-top: 16px;
        border: solid 2px #1c1c1c;
      }
    }
  }
}
</style>