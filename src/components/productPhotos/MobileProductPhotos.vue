<template>
  <div class="mobile_slider_wrapper">
    <swiper
      :pagination="pagination"
      :slidesPerView="'auto'"
      :spaceBetween="0"
      :modules="modules"
      class="mySwiper"
      :loop="true"
    >
      <swiper-slide
        v-for="slide in productPhotosData"
        :key="slide"
        class="swiper-slide_mobile_photo"
      >
        <img class="mobelie_img" v-if="slide.original" :src="slide.original" alt="product photo"
      /></swiper-slide>
    </swiper>

    <div class="mobile_icon_block">
      <div class="mobile_icons">
        <img src="../../assets/whiteLike.svg" />
        <img src="../../assets/union.svg" />
      </div>
      <div class="mobile_labels_block">
        <span class="mobile_promocode_label">{{ promocode }}</span>
        <span class="mobile_promocode_label preorder">предзаказ</span>
      </div>
    </div>
    <span class="mobile_status_label"> New </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>'
        }
      },
      modules: [Pagination]
    }
  },
  data() {
    return {
      indexOfAtiveItem: 0,
      promocode: '',
      currentSlideIndex: 0
    }
  },
  methods: {
    slideTo(val) {
      this.currentSlideIndex = val
    }
  },
  computed: {
    ...mapGetters({
      product: 'product'
    })
  },
  created() {
    this.productPhotosData = [...this.product.photos, ...this.product.videos]
    this.currentItem = this.productPhotosData[0]
    this.promocode = this.product.promocode.name
  }
}
</script>

<style>
.mobile_slider_wrapper {
  position: relative;
  width: 100%;
  height: 415px;
}

.mySwiper {
  width: 100%;
  height: 370px;
}
.swiper-slide_mobile_photo {
  width: 250px;
}

.mobelie_img {
  width: 100%;
}
.mobile_icon_block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 15px;
}
.mobile_icons {
  display: flex;
  align-items: center;
}
.mobile_icons img:first-child {
  margin-right: 20px;
}
.mobile_labels_block {
  width: 100%;
  max-width: 220px;
  display: flex;
  justify-content: space-between;
}
.mobile_promocode_label {
  color: white;
  text-transform: uppercase;
  background-color: #8b123b;
  border-radius: 6px;
  padding: 5px 10px;
}
.preorder {
  color: #282828;
  background-color: #eeeeee;
}
.mobile_status_label {
  color: white;
  position: absolute;
  bottom: 75px;
  left: 20px;
  border-radius: 10px;
  background-color: #08be91;
  padding: 5px 10px;
  z-index: 9999;
}

.swiper-pagination {
  display: flex;
  position: absolute;
  left: 20px !important;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  border: 1px solid;
  border-color: #282828;
  background: none;
}
.swiper-pagination-bullet-active {
  background: #282828;
}
</style>
