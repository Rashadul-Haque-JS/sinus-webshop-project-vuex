<template>
  <div class="wrapper">
    <h1>Details</h1>
    <div class="view">
      <div class="image">
        <img :src="require(`../assets/${product.itemImg}.svg`)" />
      </div>
      <div class="details">
        <h1>{{ product.name }}</h1>
        <p>Sizes: {{ " " + product.size }}</p>
        <p>
          <span>Descriptions:</span> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti vero atque reiciendis repudiandae molestias
          labore ad maxime natus, sint sunt optio commodi qui obcaecati eos
          dicta, iusto magnam ipsum nisi repellendus incidunt rerum voluptatem?
          Doloremque eius perspiciatis, quaerat, veniam harum voluptatem iure
          optio numquam est unde beatae tenetur fugit incidunt?
        </p>
        <p>SEK{{ " " + product.price }}:-</p>
        <button>ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ product: "viewProduct" }),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  width: 100%;

  .view {
    margin: 24px auto 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 48px;

    .details {
      display: grid;
      grid-template-columns: 1fr;

      grid-row-gap: 50px;
      p {
        line-height: 1.6rem;
        letter-spacing: 0.1rem;
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>