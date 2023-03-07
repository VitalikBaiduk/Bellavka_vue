<template>
  <div class="extra_info_wrapper">
    <div class="wrapper__buy_info_inner">
      <div class="wrapper_buy_info">
        <span class="buy_info_text">купили 43 раза</span>
        <span class="buy_info_text"> | </span>
        <div class="cart_info_wrapper">
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.6 5C0.6 4.77909 0.779086 4.6 1 4.6H12C12.2209 4.6 12.4 4.77909 12.4 5V13C12.4 14.3255 11.3255 15.4 10 15.4H3C1.67452 15.4 0.6 14.3255 0.6 13V5Z"
              stroke="#B0AFAB"
              stroke-width="1.2"
            />
            <path
              d="M4 7V3.5C4 2.11929 5.11929 1 6.5 1V1C7.88071 1 9 2.11929 9 3.5V7"
              stroke="#B0AFAB"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
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
      <ResourceButtons
        v-for="(item, index) in buttonsDataArr"
        :key="index"
        :buttonType="item.type"
      />
    </div>
  </div>
</template>

<script>
import ResourceButtons from './components/ResourceButtons.vue'
export default {
  data() {
    return {
      buttonsDataArr: [{ type: 'REVIEWS' }, { type: 'FEEDBACK' }, { type: 'QUESTIONS' }],
      toggle: false
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
</style>
