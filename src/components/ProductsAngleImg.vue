<template>
  <div class="wrapper">
    <article class="small-layout">
      <img :src="require(`../assets/${image}.svg`)" />
    </article>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .small-layout {
    width: 240px;
    height: 154px;
    background-color: #e0e0e0;

    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid #fff;
    img {
      width: 132px;
      height: 120px;
      cursor: pointer;
    }

    img:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
}
</style>