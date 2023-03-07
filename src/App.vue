<template>
  <Loader v-if="$store.state.loading" />
  <div v-if="Object.keys($store.getters.product).length > 0" class="extra_wrapper">
    <div class="header_block">
      <BackButton />
      <span class="title">{{
        $store.state.product.fullName +
        ' ' +
        $store.state.product.colors[0].value +
        ', ' +
        $store.state.product.category.value
      }}</span>
    </div>
    <div class="global_wrapper">
      <ProductPhotos />
      <div class="global_wrapper_inner">
        <ExtraInfo @toggle="getToggleValue" />
        <PriceInfo :toggle="toggle" />
        <div class="buttons_wrapper">
          <CommonButtons type="IN_CART" />
          <CommonButtons type="IN_ONE_CLICK" />
        </div>
        <ShipmentProduct city="Москва" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import BackButton from './components/common/BackButton.vue'
import ProductPhotos from './components/productPhotos/ProductPhotos.vue'
import ExtraInfo from './components/extraInfo/ExtraInfo.vue'
import PriceInfo from './components/priceInfo/PriceInfo.vue'
import CommonButtons from './components/common/CommonButtons.vue'
import ShipmentProduct from './components/ShipmentProduct.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Loader,
    BackButton,
    ProductPhotos,
    ExtraInfo,
    PriceInfo,
    CommonButtons,
    ShipmentProduct
  },
  data() {
    return {
      toggle: false
    }
  },
  methods: {
    ...mapActions({
      getProductData: 'getProductData'
    }),
    getToggleValue(toggleValue) {
      this.toggle = toggleValue
    }
  },
  computed: {
    // ...mapGetters(['product'])
  },
  async mounted() {
    await this.getProductData()
  }
}
</script>

<style>
.extra_wrapper {
  /* width: 100%; */
  padding: 40px 30px 70px 30px;
  overflow: hidden;
}

.header_block {
  position: relative;
  display: flex;
}
.title {
  font-size: 35px;
  margin: 10px 0 0 120px;
}
.global_wrapper {
  display: flex;
}
.global_wrapper_inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
}
.buttons_wrapper {
  display: flex;
  margin-top: 25px;
  gap: 20px;
}
</style>
