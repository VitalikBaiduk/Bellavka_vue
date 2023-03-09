<template>
  <div class="other_colors_wrapper">
    <span>Цвета:</span>
    <div class="other_colors_block">
      <img class="other_colors_img" :src="data[0]" alt="other colors img" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      data: []
    }
  },
  computed: {
    ...mapGetters({
      product: 'product'
    })
  },
  created() {
    this.data = [this.product.photos[0].original]
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
