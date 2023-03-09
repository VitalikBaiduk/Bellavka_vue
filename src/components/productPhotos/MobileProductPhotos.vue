<template>
  <div class="mobile_slider_wrapper">
    <Carousel
      :breakpoints="breakpoints"
      v-model="currentSlideIndex"
      :items-to-show="productPhotosData.length + 1"
      :wrap-around="true"
    >
      <Slide class="mobelie_slider" v-for="slide in productPhotosData" :key="slide">
        <img class="mobelie_img" v-if="slide.original" :src="slide.original" alt="product photo" />
        <video v-if="currentSlideIndex === productPhotosData.length - 1" muted loop autoPlay>
          <source
            class="mobelie_img"
            type="video/mp4"
            :src="productPhotosData[currentSlideIndex].original"
          />
        </video>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { mapGetters } from 'vuex'

export default {
  components: {
    Carousel,
    Slide,
    Pagination
  },
  data() {
    return {
      indexOfAtiveItem: 0,
      promocode: '',
      currentSlideIndex: 0,
      breakpoints: {
        300: {
          itemsToShow: 1.5,
          snapAlign: 'center'
        },
        400: {
          itemsToShow: 1.6,
          snapAlign: 'center'
        },
        500: {
          itemsToShow: 2.1,
          snapAlign: 'center'
        },
        600: {
          itemsToShow: 2.4,
          snapAlign: 'center'
        },

        700: {
          itemsToShow: 2.7,
          snapAlign: 'center'
        },
        800: {
          itemsToShow: 2.7,
          snapAlign: 'start'
        },
        850: {
          itemsToShow: 2.92,
          snapAlign: 'start'
        },

        900: {
          itemsToShow: 2.95,
          snapAlign: 'start'
        },
        930: {
          itemsToShow: 3.1,
          snapAlign: 'start'
        }
      }
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

.mobile_slider_wrapper section .carousel__pagination {
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
}

.mobile_slider_wrapper section ol li button::after {
  content: '';
  width: 10px;
  height: 10px;
  border: 1px solid;
  border-color: #282828;
  border-radius: 100%;
  font-size: 0;
  background: none;
}

.mobile_slider_wrapper section ol li .carousel__pagination-button--active::after {
  background: #282828;
}

.mobile_slider_wrapper section .carousel__viewport .carousel__track li {
  width: 250px !important;
}
.mobelie_slider {
  width: 100%;
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
}
</style>
