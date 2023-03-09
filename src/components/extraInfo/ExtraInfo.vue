<template>
  <div class="extra_info_wrapper">
    <div class="wrapper__buy_info_inner">
      <div class="wrapper_buy_info">
        <span class="buy_info_text">купили 43 раза</span>
        <span class="buy_info_text remove_in_mobile"> | </span>
        <div class="cart_info_wrapper">
          <img src="../../assets/cartIcon.svg" />
          <span class="buy_info_text"> в корзине у 15 пользователей</span>
        </div>
      </div>
      <div class="wrapper_price_options">
        <span :class="{ active: toggle }">Оптовые цены</span>
        <label class="switch">
          <input type="checkbox" />
          <span v-on:click="setToggle" class="slider round"></span>
        </label>
        <span :class="{ active: !toggle }">Розничные цены</span>
      </div>
    </div>
    <div class="review_buttons_wrapper">
      <ResourceButtons v-for="item in buttonsDataArr" :key="item" :buttonType="item.type" />
    </div>
    <div class="mobile_brand_info_wrapper">
      <div class="mobile_brand_text_wrapper">
        <span>{{ title }}</span>
        <span>{{ category }}</span>
      </div>
      <img src="../../assets/brandLogo.svg" />
    </div>
  </div>
</template>

<script>
import ResourceButtons from './components/ResourceButtons.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      buttonsDataArr: [{ type: 'REVIEWS' }, { type: 'FEEDBACK' }, { type: 'QUESTIONS' }],
      toggle: false,
      title: '',
      category: ''
    }
  },
  methods: {
    setToggle() {
      this.toggle = !this.toggle
      this.$emit('toggle', this.toggle)
    },
    setColor() {
      return this.toggle ? '' : '#B0AFAB'
    }
  },
  components: {
    ResourceButtons
  },

  computed: {
    ...mapGetters({
      product: 'product'
    })
  },
  created() {
    this.title = this.product.fullName + ' ' + this.product.colors[0].value
    this.category = this.product.category.value
  }
}
</script>

<style>
.extra_info_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.wrapper_buy_info {
  display: flex;
  align-items: center;
}
.wrapper__buy_info_inner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.buy_info_text {
  color: #b0afab;
}
.buy_info_text:nth-child(2) {
  margin: 0 10px;
}
.cart_info_wrapper {
  display: flex;
}
.wrapper_price_options {
  width: 100%;
  max-width: 285px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 13px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: '';
  height: 11px;
  width: 11px;
  left: 2px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #bd9365;
}

input:checked + .slider:before {
  -webkit-transform: translateX(7px);
  -ms-transform: translateX(7px);
  transform: translateX(7px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.review_buttons_wrapper {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 15px;
}
.active {
  transition: 0.4s;
  color: #b0afab;
}
.mobile_brand_info_wrapper {
  display: none;
}

@media screen and (max-width: 1050px) {
  .extra_info_wrapper {
    margin-top: 20px;
  }

  .wrapper_buy_info {
    flex-wrap: wrap;
    gap: 10px;
  }
  .wrapper_price_options {
    display: none;
  }
  .remove_in_mobile {
    display: none;
  }
  .mobile_brand_info_wrapper {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 15px;
  }
  .mobile_brand_text_wrapper {
    display: flex;
    flex-direction: column;
  }
  .mobile_brand_text_wrapper span:nth-child(2) {
    color: #b0afab;
  }
}
</style>
