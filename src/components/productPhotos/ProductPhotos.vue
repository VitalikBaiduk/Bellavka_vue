<template>
  <div class="slider_wrapper">
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
    <div class="active_item_wrapper">
      <video
        class="active_video"
        v-if="activeItem >= productPhotosData.length - 1"
        muted
        loop
        autoPlay
      >
        <source type="video/mp4" :src="productPhotosData[activeItem].original" />
      </video>

      <img
        class="active_photo"
        v-if="activeItem < productPhotosData.length - 1"
        :src="productPhotosData[activeItem].original"
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  props: {
    promocode: String
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      activeItem: 0,
      productPhotosData: [...this.$store.state.product.photos, ...this.$store.state.product.videos]
    }
  },
  components: {
    VueSlickCarousel: window['vue-slick-carousel']
  }
}
</script>
<style>
.slider_wrapper {
  width: 100%;
  max-height: 675px;
  display: flex;
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
</style>
