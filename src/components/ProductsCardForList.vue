<template>
  <div class="card-layout">
    <div class="product-image">
      <img class="cart-icon" src="@/assets/love_white.svg" alt="Icon" />
      <img
        class="single-product"
        :src="require(`../assets/${item.itemImg}.svg`)"
      />
    </div>
    <div class="product-info">
      <img src="@/assets/love_icon.svg" alt="icon" />
      <h3 class="name">{{ item.name }}</h3>
      <p class="product-size">{{ item.size }}</p>
      <p class="product-price">SEK {{ "" + item.price }}:-</p>
      <button class="btn">VIEW DETAILS</button>
      <h3 class="rating">*****</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: { product: Object },
  data() {
    return {
      item: this.product,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card-layout {
  width: 199px;
  height: 285px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #e0e0e0;
  font-size:75%;
  .product-image {
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .single-product {
      width: 116px;
      height: 151px;
    }

    .cart-icon {
      position: absolute;
      width: 18px;
      height: 18px;

      right: 8px;
      top: 8px;
    }
  }

  .product-info {
    height: 100px;

    background-color: #ffffff;
    padding: 8px;
    position: relative;

    img {
      width: fit-content;
      width: 15px;
      height: 12.75px;
      position: absolute;
      top: 12px;
      right: 12px;
    }

    .name {
      text-align: start;
      margin-left: 8px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      /* identical to box height, or 130% */

      letter-spacing: -0.2px;
    }

    .product-size {
      text-align: start;
      margin-left: 8px;
      margin-top: 0px;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 18px;
      /* identical to box height, or 138% */

      letter-spacing: -0.2px;

      color: #969696;
    }

    .product-price {
      text-align: start;
      margin: 0px 0px 0px 8px;

      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: -0.1px;

      color: #1c1c1c;
    }

    .rating {
      text-align: end;
      position: absolute;
      bottom: 0px;
      left: 16px;
      color: #ffd000;
      font-size: 1.2rem;
    }
    .btn {
      background-color: #1c1c1c;
      position: absolute;
      padding: 2px 4px;
      bottom: 8px;
      right: 8px;
      color: #fff;
      cursor: pointer;
      font-size: 0.5rem;
    }

    .btn:hover {
      transform: translateY(1px);
    }
  }
}
</style>
