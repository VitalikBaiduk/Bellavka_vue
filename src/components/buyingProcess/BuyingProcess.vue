<template>
  <div class="buying_process_wrapper">
    <SizeInfo :sizeData="[$store.state.product.sizes, $store.state.product.heights]" />
    <div class="buttons_wrapper">
      <CommonButtons type="IN_CART" />
      <CommonButtons type="IN_ONE_CLICK" />
    </div>
  </div>
</template>

<script>
import CommonButtons from '../common/CommonButtons.vue'
import SizeInfo from './components/SizeInfo.vue'
export default {
  components: {
    SizeInfo,
    CommonButtons
  }
}
</script>

<style>
.buying_process_wrapper {
  width: 100%;
  margin-top: 30px;
}
.buttons_wrapper {
  display: flex;
  margin-top: 25px;
  gap: 20px;
}
</style>
