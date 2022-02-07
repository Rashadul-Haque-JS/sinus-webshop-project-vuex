<template>
  <div class="card-layout">
    <div class="product-image">
      <img
        class="cart-in-card"
        src="@/assets/cart_white.svg"
        alt="Cart"
      />
      <img
        class="single-product"
        :src="image"
        :alt="ItemImage"
      />
    </div>
    <div class="product-info">
      <img src="@/assets/icon_love_white.svg" alt="icon" />
      <h3 class="name">{{ item.name }}</h3>
      <p class="p-first">{{ item.size }}</p>
      <p class="p-last">{{ item.price }}</p>
      <h3 class="rating">*****</h3>
    </div>
  </div>
</template>

<script>
export default {
props:{product:Object},
 data(){
   return{
     image: this.product.itemImg,
     item :this.product
   }

 }

  
    
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card-layout {
  width: 265px;
  height: 380px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #e0e0e0;
  .product-image {
    width: 100%;
    height: 254px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .single-product {
      width: 154px;
      height: 201px;
    }

    .cart-in-card {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 80%;
      right: 4.91%;
      top: 2.37%;
      bottom: 87.11%;
    }
  }

  .product-info {
    height: 124px;

    background-color: #ffffff;
    padding: 8px;
    position: relative;

    img {
      width: fit-content;
      width: 20px;
      height: 17px;
      position: absolute;
      top: 4px;
      right: 12px;
    }

    .name {
      text-align: start;
      margin-left: 8px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      /* identical to box height, or 130% */

      letter-spacing: -0.2px;
    }

    .p-first {
      text-align: start;
      margin-left: 8px;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      /* identical to box height, or 138% */

      letter-spacing: -0.2px;

      color: #969696;
    }

    .p-last {
      text-align: start;
      margin-left: 8px;

      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.1px;

      color: #1c1c1c;
    }

    .rating {
      text-align: end;
      position: absolute;
      bottom: 4px;
      right: 8px;
    }
  }
}
</style>
