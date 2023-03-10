<template>
  <div v-if="recommendations.length > 0" class="recommendations_info_wrapper">
    <div class="recommendations_info_title">
      <span class="recommendations_title_text"> Вам может понравиться: </span>
      <span v-if="width > 1050" class="current_recommendation">
        {{ currentSlide + 1 }} /
        <span class="total_count_of_recommendations">{{ recommendations.length }}</span>
      </span>
    </div>
    <swiper
      :slidesPerView="'auto'"
      :loop="true"
      :spaceBetween="15"
      :navigation="true"
      :modules="modules"
      class="recommendations_swiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="slide in recommendations"
        :key="slide"
        class="recommendations_swiper_slide"
      >
        <div class="recommendations_item">
          <img
            class="recommendations_item_img"
            v-if="slide.photos[0].original"
            :src="slide.photos[0].original"
            alt="product photo"
          />
          <div class="recommendations_item_price_block">
            <span class="recommendations_item_current_price">
              {{ slide.price.current + slide.price.symbol }}
              <span class="recommendations_item_old_price">
                {{ slide.price.old + slide.price.symbol }}
              </span>
            </span>
            <img src="../assets/recCartIcon.svg" />
          </div>
          <span class="recommendations_item_brand">
            {{ slide.brand.value }}
          </span>
          <span class="recommendations_item_kit">
            {{ slide.kits[0].value }}
          </span>
          <span class="recommendations_item_discount">
            {{ '-' + slide.price.discount.market.percent + '%' }}
          </span>
          <img class="recommendations_item_like_icon" src="../assets/like.svg" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { useWindowSize } from '@vueuse/core'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const { width } = useWindowSize()

    return {
      width,
      modules: [Navigation]
    }
  },
  data() {
    return {
      activeRecItem: 1,
      recommendations: null,
      currentSlide: 0
    }
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
    onSlideChange(swiper) {
      this.currentSlide = swiper.realIndex
    }
  },
  computed: {
    ...mapGetters({
      product: 'product'
    })
  },
  created() {
    this.recommendations = this.product.recommended
  }
}
</script>

<style>
.recommendations_info_wrapper {
  position: relative;
  width: 100%;
  max-width: 330px;
  margin-top: 30px;
}

.recommendations_info_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recommendations_title_text {
  font-size: 20px;
}
.current_recommendation {
  margin-right: 15px;
  color: #b0afab;
}
.total_count_of_recommendations {
  color: #b0afab;
}
.recommendations_swiper {
  position: static;
}

.recommendations_swiper_slide {
  width: 100px !important;
}
.recommendations_item {
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  cursor: pointer;
}
.recommendations_item_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.recommendations_item_price_block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}
.recommendations_item_current_price {
  font-weight: 600;
  font-size: 14px;
  color: #bd9365;
}
.recommendations_item_old_price {
  position: relative;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #b0afab;
}
.recommendations_item_old_price::after {
  position: absolute;
  content: '';
  width: 100%;
  top: 4px;
  left: 0;
  border-top: 1px solid;
  border-color: #b0afab;
}
.recommendations_item_kit {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #b0afab;
}
.recommendations_item_discount {
  color: white;
  position: absolute;
  top: 6px;
  left: 3px;
  border-radius: 6px;
  background-color: #8b123b;
  padding: 2px 5px 0;
}
.recommendations_item_like_icon {
  position: absolute;
  top: 7px;
  right: 4px;
}

.recommendations_item_brand {
  width: 100%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommendations_swiper .swiper-button-prev::after {
  content: url('../assets/sliderArrow.svg');
  position: absolute;
  top: -123px;
  right: -230px;
}

.recommendations_swiper .swiper-button-next::after {
  content: url('../assets/sliderArrow.svg');
  position: absolute;
  top: -107px;
  right: -17px;
  transform: rotate(180deg);
}
@media screen and (max-width: 1050px) {
  .recommendations_info_wrapper {
    max-width: 100%;
  }
  .recommendations_title_text {
    color: #bd9365;
  }
  .recommendations_swiper .swiper-button-next {
    display: none;
  }
  .recommendations_swiper .swiper-button-prev {
    display: none;
  }
}
</style>
