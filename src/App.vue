<template>
  <Loader v-if="$store.state.loading" />
  <CustomModal v-if="$store.state.isActiveModal" />
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
      <div class="product__left_wrapper">
        <ProductPhotos :promocode="$store.state.product.promocode.name" />
        <div class="recommendations_wrapper">
          <LinksToBrand
            :deliveryAvailability="$store.state.product.availabilityStatus"
            :brandLinks="brandLinks"
          />
          <RecommendationsInfo :recommendations="$store.state.product.recommended" />
        </div>
      </div>

      <div class="main_info_wrapper">
        <ExtraInfo @toggle="getToggleValue" />
        <PriceInfo :toggle="toggle" />
        <BuyingProcess />
        <ShipmentProduct city="Москва" />
        <OtherColors :data="[$store.state.product.photos[0].original]" />
        <AboutTheProduct :data="$store.state.product.aboutProductData" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import BackButton from './components/common/BackButton.vue'
import ProductPhotos from './components/productPhotos/ProductPhotos.vue'
import ExtraInfo from './components/extraInfo/ExtraInfo.vue'
import PriceInfo from './components/PriceInfo.vue'
import ShipmentProduct from './components/ShipmentProduct.vue'
import AboutTheProduct from './components/AboutTheProduct.vue'
import OtherColors from './components/OtherColors.vue'
import BuyingProcess from './components/buyingProcess/BuyingProcess.vue'
import CustomModal from './components/common/CustomModal.vue'
import LinksToBrand from './components/LinksToBrand.vue'
import RecommendationsInfo from './components/RecommendationsInfo.vue'
import { mapActions, mapMutations } from 'vuex'
import { useWindowSize } from '@vueuse/core'

export default {
  setup() {
    const { width } = useWindowSize()
    return {
      width
    }
  },
  components: {
    Loader,
    BackButton,
    ProductPhotos,
    ExtraInfo,
    PriceInfo,
    ShipmentProduct,
    OtherColors,
    AboutTheProduct,
    BuyingProcess,
    CustomModal,
    LinksToBrand,
    RecommendationsInfo
  },
  data() {
    return {
      toggle: false,
      brandLinks: [
        { value: 'Все платья Luitui', link: '' },
        { value: 'Все платья', link: '' }
      ]
    }
  },
  methods: {
    ...mapActions({
      getProductData: 'getProductData'
    }),
    ...mapMutations({
      setModalData: 'setModalData'
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
    this.setModalData()
  },
  updated() {
    this.setModalData()
  }
}
</script>

<style>
.extra_wrapper {
  /* width: 100%; */
  padding: 40px 30px 70px 30px;
  overflow: hidden;
  @media (max-width: 1050px) {
    padding: 0;
  }
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
.product__left_wrapper {
  width: 100%;
  max-width: 570px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.main_info_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  /* align-items: flex-end; */
}
.recommendations_wrapper {
  width: 100%;
  max-width: 450px;
}
</style>
