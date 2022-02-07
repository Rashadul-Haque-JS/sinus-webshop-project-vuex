<template>
  <div class="wrapper">
    <h2>Lorem, ipsum.</h2>
    <div class="gallery">
      <div class="side-bar">
        <h3>OFFERS</h3>
      </div>
      <div class="product-list">
        <SinglePordsCardLarg
          class="home"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SinglePordsCardLarg from "../components/SinglePordsCardLarg.vue";
import Footer from "../components/Footer.vue"
export default {
  components: { SinglePordsCardLarg, Footer },
  data() {
    return {
     
    };
  },

  computed:{
    products(){
      return this.$store.state.products
    }
  }
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
}
.gallery {
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-left: 72px;

  .side-bar {
    grid-column: 2/3;
    background-color: #07326b;
    margin-top:32px ;
    grid-row: 1/3;
  }

  .product-list {
    grid-column: 1/2;
    display: grid;
    grid-row: 1/3;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 60px;
    margin:32px 0px;
 
  }
}
</style>