<template>
  <div class="buying_process_wrapper">
    <SizeInfo :sizeData="[product.sizes, product.heights]" />
    <div class="buttons_wrapper">
      <CommonButtons @callback="onCommonButtonsClick" type="IN_CART" />
      <CommonButtons @callback="onCommonButtonsClick" type="IN_ONE_CLICK" />
    </div>
  </div>
</template>

<script>
import CommonButtons from '../common/CommonButtons.vue'
import SizeInfo from './components/SizeInfo.vue'
import { mapMutations, mapGetters } from 'vuex'

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
      this.activeItems.items.activeHeigth === null
        ? this.setIsActiveModal(true)
        : this.activeItems.items.activeSize.length === 0
        ? this.setIsActiveModal(true)
        : this.setIsActiveModal(false)
    }
  },
  computed: {
    ...mapGetters({
      product: 'product',
      activeItems: 'activeItems'
    })
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

@media screen and (max-width: 1050px) {
  .buttons_wrapper {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
