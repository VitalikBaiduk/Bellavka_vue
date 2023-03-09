<template>
  <Loader v-if="loading" />
  <CustomModal v-if="isActiveModal" />
  <div v-if="Object.keys(product).length > 0" class="extra_wrapper">
    <div v-if="width > 1050" class="header_block">
      <BackButton />
      <span class="title">{{ title }}</span>
    </div>
    <div class="global_wrapper">
      <div v-if="width > 1050" class="product_left_wrapper">
        <ProductPhotos />
        <div class="recommendations_wrapper">
          <LinksToBrand :brandLinks="brandLinks" />
          <RecommendationsInfo />
        </div>
      </div>

      <MobileProductPhotos v-if="width <= 1050" />
      <div class="main_info_wrapper">
        <ExtraInfo @toggle="getToggleValue" />
        <PriceInfo :toggle="toggle" />
        <BuyingProcess />
        <ShipmentProduct city="Москва" />
        <OtherColors />
        <AboutTheProduct :data="product.aboutProductData" />
        <RecommendationsInfo v-if="width <= 1050" />
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
import MobileProductPhotos from './components/productPhotos/MobileProductPhotos.vue'
import { mapMutations, mapGetters } from 'vuex'
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
    RecommendationsInfo,
    MobileProductPhotos
  },
  data() {
    return {
      toggle: false,
      brandLinks: [
        { value: 'Все платья Luitui', link: '' },
        { value: 'Все платья', link: '' }
      ],
      title: null
    }
  },
  methods: {
    ...mapMutations({
      setModalData: 'setModalData'
    }),
    getToggleValue(toggleValue) {
      this.toggle = toggleValue
    }
  },
  computed: {
    ...mapGetters({
      product: 'product',
      loading: 'loading',
      isActiveModal: 'isActiveModal'
    })
  },
  async created() {
    await this.$store.dispatch('getProductData').then(() => {
      this.title =
        this.product.fullName +
        ' ' +
        this.product.colors[0].value +
        ', ' +
        this.product.category.value
    })
    this.setModalData()
  },
  updated() {
    this.setModalData()
  }
}
</script>

<style>
.extra_wrapper {
  width: 100%;
  padding: 40px 30px 70px 30px;
  /* overflow: hidden; */
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
.product_left_wrapper {
  min-width: 570px;
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

@media screen and (max-width: 1050px) {
  .extra_wrapper {
    padding: 0;
  }
  .global_wrapper {
    display: block;
  }
  .main_info_wrapper {
    margin: 0;
    padding: 0 20px;
  }
}
</style>
