<template>
  <div class="buying_process_wrapper">
    <SizeInfo :sizeData="[$store.state.product.sizes, $store.state.product.heights]" />
    <div class="buttons_wrapper">
      <CommonButtons @callback="onCommonButtonsClick" type="IN_CART" />
      <CommonButtons @callback="onCommonButtonsClick" type="IN_ONE_CLICK" />
    </div>
  </div>
</template>

<script>
import CommonButtons from '../common/CommonButtons.vue'
import SizeInfo from './components/SizeInfo.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    SizeInfo,
    CommonButtons
  },
  methods: {
    ...mapMutations({
      setIsActiveModal: 'setIsActiveModal'
    }),
    onCommonButtonsClick() {
      this.$store.state.activeItems.items.activeHeigth === null
        ? this.setIsActiveModal(true)
        : this.$store.state.activeItems.items.activeSize.length === 0
        ? this.setIsActiveModal(true)
        : this.setIsActiveModal(false)
    }
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
