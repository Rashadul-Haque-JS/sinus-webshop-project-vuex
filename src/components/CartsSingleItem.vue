<template>
  <article class="container">
    <div class="item-info">
      <ProductsAngleImg class="comp-img" :image="image" />
      <div class="text-info">
        <h3>{{ item.name }}</h3>
        <p>{{ item.size }}</p>
      </div>
    </div>
    <div class="quantities">
      <label for="date">Qty:</label>
      <select
        @change="addQtty"
        class="quantity"
        name="quantity"
        v-model="customsChoice.quantity"
        required
      >
        <option v-for="number in numbers" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
    </div>

    <p class="price"> <span>{{ item.currency.local }}</span>{{ totalForItem }}</p>

    <div class="remove-item">
      <img src="../assets/love_icon.svg" alt="love icon" />
      <button @click="remove">Remove</button>
    </div>
  </article>
</template>

<script>
import ProductsAngleImg from "./ProductsAngleImg.vue";

export default {
  props: { item: Object, idx: Number },
  components: { ProductsAngleImg },
  data() {
    return {
      numbers: 10,
      image: this.item.itemImg,
      customsChoice: this.item,
    };
  },

  computed: {
    totalForItem() {
      return this.customsChoice.price * this.customsChoice.quantity;
    },
  },
  methods: {
    addQtty() {
      this.$store.dispatch("addQty", this.customsChoice);
    },

    remove() {
      this.$store.dispatch("removeProduct", this.idx);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 776px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 16px 24px;
  margin: 32px 0px 0px 24px;

  .item-info {
    display: flex;
    justify-content: space-between;

    align-items: center;
    .comp-img {
      align-items: center;
      width: 160px;
      height: 96px;
    }
    .text-info {
      margin-left: 56px;
      align-items: center;
      h3 {
        width: 136;
        margin: 0px;
        font-family: Montserrat;
        font-size: 1rem;

        font-weight: bold;

        color: #545454;
      }
      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;

        letter-spacing: -0.2px;
        margin: 0px;
        color: #9da1a7;
      }
    }
  }

  .quantities {
    font-size: 0.9rem;

    .quantity {
      border-radius: 5px;
      background-color: #f0ffff;
      margin-left: 4px;
    }
  }

  .price {
    font-size: 0.8rem;
    font-weight: bold;

    span{
      margin-right: 4px;
    }
  }

  .remove-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-left: 100px;

    img {
      width: 18px;
      height: 16px;
    }

    button {
      padding: 0px 8px;
      background-color: rgba(196, 21, 20, 0.8);
      color: #fff;
      margin-left: 18px;
      align-items: center;
    }
  }
}
.payment {
  width: 350px;
  height: 600px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 32px;

  .payment-details {
    width: 100%;
    height: 250px;
  }

  .payment-action {
    width: 100%;
    height: 300px;
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
</style>