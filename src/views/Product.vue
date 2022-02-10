<template>
  <div class="wrapper">
    <div class="container">
      <div class="product-images">
        <article class="small-images">
          <ProductAngle
            v-for="(image, index) in images"
            :key="index"
            :image="image"
          />
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
        <h2 :class="color">{{ product.name }}</h2>
        <p class="size">Sizes: {{ " " + product.size }}</p>
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
    <div class="misc-block">
      <h2>THIS BLOCK IS RESERVED FOR FUTURE UPDATES......</h2>
    </div>
    
  </div>
</template>

<script>
import ProductAngle from "../components/ProductsAngleImg.vue";

export default {
  components: { ProductAngle, },
  computed: {
    product() {
      return this.$store.getters.productsList.find(
        (product) => product.id == this.$route.params.id
      );
    },

    images() {
      return this.product.multiImgs;
    },

    color() {
      let str = this.product;

      const parts = str.itemImg.split("_");
      return parts[parts.length - 1];
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("toCart", this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .product-images {
      display: flex;
      justify-content: space-between;
      margin: 100px 20px 0px 20px;
      position: relative;

      .large-image {
        width: 394px;
        height: 285px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 100px;
        margin-top: 24px;

        .single-product {
          width: 300px;
          height: 315px;
        }
      }
    }
    .product-details {
      margin: 100px 32px 0px 100px;

      h1 {
        font-size: 1.4rem;
      }
      h2 {
        font-size: 1.2rem;
      }
      .red {
        color: rgba(196, 21, 20, 0.8);
      }
      .green {
        color: #389225;
      }

      .purple {
        color: #49226c;
      }

      .ocean {
        color: #2a527d;
      }

      .black {
        color: #454547;
      }

      .yellow {
        color: #a77f1f;
      }
      .blue {
        color: #213487;
      }

      .pink {
        color: #c56e94;
      }

      .size {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 0.8rem;
      }

      .descriptions {
        font-size: 0.8rem;
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
          cursor: pointer;
        }
        button:hover {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
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

  .misc-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    font-size: 0.8rem;
    border: 1px dotted #000;
    margin: 196px 0px;
  }
}
</style>