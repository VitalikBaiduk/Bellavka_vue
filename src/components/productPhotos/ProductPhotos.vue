<template>
  <div class="slider_wrapper">
    <swiper
      :slidesPerView="4"
      :loop="true"
      :spaceBetween="15"
      :direction="'vertical'"
      :modules="modules"
      class="product_photo_slider"
      :navigation="true"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="product_photo_slider_slide"
        v-for="item in productPhotosData"
        :key="item"
        v-on:click="onSlideChange"
      >
        <img class="small_item" v-if="!item.preview" :src="item[440]" />
        <div class="small_video_wrapper">
          <img class="small_item" v-if="item.preview" :src="item.preview" />
          <img class="player" v-if="item.preview" src="../../assets/VideoPlayer.svg" /></div
      ></swiper-slide>
    </swiper>

    <div class="active_item_wrapper">
      <video class="small_item" v-if="currentItem.preview" muted loop autoPlay>
        <source type="video/mp4" :src="productPhotosData[indexOfAtiveItem].original" />
      </video>

      <img
        class="active_photo"
        v-if="!currentItem.preview"
        :src="productPhotosData[indexOfAtiveItem].original"
      />
      <span class="active_item_top_label">new</span>
      <div class="active_item_bottom_label">
        <span class="bottom_label_text">{{ promocode }}</span>
      </div>
      <div class="interactive_icon_block">
        <img src="../../assets/like.svg" />
        <img src="../../assets/union.svg" />
        <img src="../../assets/download-four.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    }
  },
  data() {
    return {
      indexOfAtiveItem: 0,
      productPhotosData: null,
      currentItem: null,
      promocode: ''
    }
  },
  methods: {
    onSlideChange(swiper) {
      this.currentItem = this.productPhotosData[swiper.realIndex]
      this.indexOfAtiveItem = swiper.realIndex
    },
    onActiveItemClick(index) {
      this.indexOfAtiveItem = index
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
.slider_wrapper {
  position: relative;
  width: 100%;
  height: 670px;
  display: flex;
  overflow: hidden;
}
.product_photo_slider {
  width: 100px !important;
  height: 635px;
  margin-top: 20px;
  position: static;
}
.product_photo_slider_slide {
  height: 144px;
}
.product_photo_slider .swiper-button-prev::after {
  content: url('../../assets/ArrowUp.svg');
  position: relative;
  top: -337px;
  left: 28px;
}
.product_photo_slider .swiper-button-next::after {
  content: url('../../assets/ArrowUp.svg');
  position: relative;
  bottom: -342px;
  left: -497px;
  transform: rotate(180deg);
}
.slider_item {
  position: relative;
  top: 30px;
  width: 96px;
  padding: 0;
  transition: all ease 0.5s;
  overflow: hidden;
}
.slider_button_prev {
  border: none;
  width: 100px;
  background: white;
  position: absolute;
  top: 0;
  cursor: pointer;
}
.slider_button_next {
  border: none;
  width: 100px;
  height: 20px;
  background: white;
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
  cursor: pointer;
}
.active_item_wrapper {
  position: relative;
  width: 100%;
  max-width: 450px;
  display: flex;
  margin-left: 20px;
}
.active_video {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.active_photo {
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.active_item_top_label {
  color: white;
  text-transform: uppercase;
  max-width: 80px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: #009872;
  border-radius: 16px;
  padding: 10px 15px;
}
.active_item_bottom_label {
  position: absolute;
  bottom: 15px;
  right: 0px;
  background: #8b123b;
  padding: 10px 7px;
}
.active_item_bottom_label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  float: left;
  transform: skew(45deg);
  background: inherit;
}
.active_item_bottom_label:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  float: left;
  transform: skew(-45deg);
  background: inherit;
}
.bottom_label_text {
  position: relative;
  color: white;
  text-transform: uppercase;
  z-index: 9;
}
.interactive_icon_block {
  position: absolute;
  top: 20px;
  right: 15px;
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.small_item {
  width: 100%;
  height: auto;
  max-height: 100%;
  margin-bottom: 10px;
  transition: 0.2s linear;
  object-fit: cover;
}
.small_video_wrapper {
  position: relative;
}
.player {
  position: absolute;
  top: 35%;
  left: 30%;
}
</style>
