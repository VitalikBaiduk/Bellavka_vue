<template>
  <div class="price_block_wrapper">
    <div class="price_block_header">
      <span class="price_block_header_text">
        {{ toggle ? 'Розничная цена:' : 'Оптовая цена:' }}
      </span>
    </div>
    <div class="price_block_items">
      <div class="prices">
        <div class="current_price_block">
          <span class="current_price">{{ priceHandler('CURRENT') }} </span>
          <span class="old_price"> {{ priceHandler('OLD') }} </span>
        </div>
        <div class="discounts_description_block">
          <span class="discount_amount">
            {{
              '-' +
              $store.state.product.price.discount.market.amount +
              $store.state.product.price.symbol
            }}
            <span class="discount_percent">
              скидка бренда {{ $store.state.product.price.discount.market.percent + '%' }}
            </span>
          </span>
          <span class="discount_amount">
            {{
              '-' +
              $store.state.product.price.discount.promocode.amount +
              $store.state.product.price.symbol
            }}
            <span class="discount_percent">
              {{ $store.state.product.promocode.name }}
              {{ $store.state.product.price.discount.promocode.percent + '%' }}
            </span>
          </span>
        </div>
      </div>
      <div class="promocode_block">
        <div class="promocode_description_block">
          <div class="main_promocode_description">
            <span class="promocode_name"> {{ $store.state.product.promocode.name }} </span>
            <span class="promocode_description">
              {{ $store.state.product.promocode.description }}</span
            >
          </div>
          <div class="promocode_description_block_footer">
            <img src="../assets/clockIcon.svg" alt="clock" />
            <CustomTimer :time="promocodeEndDate" />
          </div>
        </div>
        <svg
          width="4"
          height="120"
          viewBox="0 0 4 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.17986 299H0V287.036H3.17986V299ZM3.17986 275.079H0V263.116H3.17986V275.079ZM3.17986 251.158H0V239.201H3.17986V251.158ZM3.17986 227.238H0V215.281H3.17986V227.238ZM3.17986 203.323H0V191.366H3.17986V203.323ZM3.17986 179.403H0V167.445H3.17986V179.403ZM3.17986 155.482H0V143.525H3.17986V155.482ZM3.17986 131.561H0V119.604H3.17986V131.561ZM3.17986 107.64H0V95.6831H3.17986V107.64ZM3.17986 83.7195H0V71.7623H3.17986V83.7195ZM3.17986 59.7987H0V47.8415H3.17986V59.7987ZM3.17986 35.8844H0V23.9208H3.17986V35.8844ZM3.17986 11.9636H0V0H3.17986V11.9636Z"
            fill="white"
          />
        </svg>
        <div class="promocode_percent_block">
          <span class="promocode_percent" fontSize="60px" fontWeight="800">
            {{ '-' + $store.state.product.price.discount.promocode.percent + '%' }}
          </span>
        </div>
      </div>
    </div>
    <div class="second_option_of_price_block">
      <span class="second_option_of_price">{{ priceHandler('SECOND_OPTION_OF_PRICE') }}</span>
      <img src="../assets/addIndoIcon.svg" alt="addIndoIcon" />
    </div>
  </div>
</template>

<script>
import CustomTimer from './common/CustomTimer.vue'

export default {
  props: {
    toggle: Boolean
  },
  components: {
    CustomTimer
  },
  data() {
    return {
      currentPrice: 0,
      oldPrice: 0,
      secondOptionOfPrice: '',
      promocodeEndDate: this.$store.state.product.promocode.endedAt
    }
  },
  methods: {
    priceHandler(type) {
      const priceResult = {
        ['CURRENT']: this.toggle
          ? this.$store.state.product.price.current + this.$store.state.product.price.symbol
          : this.$store.state.product.price.wholesale + this.$store.state.product.price.symbol,
        ['OLD']: this.toggle
          ? this.$store.state.product.price.old + this.$store.state.product.price.symbol
          : this.$store.state.product.price.wholesaleOld + this.$store.state.product.price.symbol,
        ['SECOND_OPTION_OF_PRICE']: this.toggle
          ? 'Оптовая цена: ' +
            this.$store.state.product.price.wholesale +
            this.$store.state.product.price.symbol
          : 'Розничная цена: ' +
            this.$store.state.product.price.retail +
            this.$store.state.product.price.symbol
      }

      return priceResult[type]
    }
  }
}
</script>

<style>
.price_block_wrapper {
  width: 100%;
  margin-top: 20px;
}
.price_block_header {
  display: flex;
  justify-content: space-between;
  background: #282828;
  border-radius: 6px 6px 0 6px;
  padding: 5px 15px;
}
.price_block_header_text {
  color: white;
}
.price_block_items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}
.prices {
  width: 30%;
  max-width: 220px;
  padding: 10px 15px;
}
.current_price_block {
  display: flex;
  align-items: center;
}
.current_price {
  font-size: 45px;
  font-weight: 600;
  color: #bd9365;
}
.old_price {
  position: relative;
  margin-left: 10px;
  font-weight: 400;
  color: #b0afab;
}
.old_price::after {
  position: absolute;
  content: '';
  width: 100%;
  top: 8px;
  left: 0;
  border-top: 1px solid;
  border-color: #b0afab;
}
.discounts_description_block {
  display: flex;
  flex-direction: column;
}
.discounts_description_block span:nth-child(2) {
  margin-top: 5px;
}
.discount_amount {
  font-size: 14px;
  font-weight: 400;
  color: #8b123b;
}
.discount_percent {
  font-size: 14px;
  font-weight: 400;
  color: #b0afab;
}
.promocode_block {
  width: 70%;
  display: flex;
  justify-content: space-between;
  background-color: #faf1e8;
  border-radius: 0 0 6px 6px;
}
.promocode_description_block {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px 10px;
}
.main_promocode_description {
  display: flex;
  flex-direction: column;
}
.promocode_name {
  text-transform: uppercase;
  font-weight: 600;
}
.promocode_description {
  font-weight: 400;
}
.promocode_description_block_footer {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.promocode_percent_block {
  display: flex;
  align-items: center;
  padding-right: 20px;
}
.promocode_percent {
  font-size: 60px;
  font-weight: 800;
}
.second_option_of_price_block {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.second_option_of_price {
  margin-right: 10px;
}
</style>
