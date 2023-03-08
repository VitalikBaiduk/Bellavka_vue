<template>
  <div class="other_colors_wrapper">
    <span>Цвета:</span>
    <div class="other_colors_block">
      <img class="other_colors_img" :src="data[0]" v-bind:key="index" alt="other colors img" />
    </div>
  </div>
</template>

<script>
// как перебрать массив картинок?
export default {
  props: {
    data: Array
  }
}
</script>

<style>
.other_colors_wrapper {
  margin-top: 20px;
}
.other_colors_block {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.other_colors_img {
  width: 65px;
  border-radius: 6px;
}
</style>
