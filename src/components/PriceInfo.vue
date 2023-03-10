<template>
  <div class="price_block_wrapper">
    <div class="price_block_header">
      <span class="price_block_header_text">
        {{ toggle ? 'Розничная цена:' : 'Оптовая цена:' }}
      </span>
      <MoreInfoButton v-if="width < 1050" @setIsShowFullPriceInfo="showFullPriceInfo" />
    </div>
    <div class="price_block_items">
      <div class="prices">
        <div class="current_price_block">
          <span class="current_price">{{ priceHandler('CURRENT') }} </span>
          <span class="old_price"> {{ priceHandler('OLD') }} </span>
        </div>
        <div class="discounts_description_block">
          <span class="discount_amount">
            {{ '-' + product.price.discount.market.amount + product.price.symbol }}
            <span class="discount_percent">
              скидка бренда {{ product.price.discount.market.percent + '%' }}
            </span>
          </span>
          <span class="discount_amount">
            {{ '-' + product.price.discount.promocode.amount + product.price.symbol }}
            <span class="discount_percent">
              {{ product.promocode.name }}
              {{ product.price.discount.promocode.percent + '%' }}
            </span>
          </span>
        </div>
      </div>
      <div v-if="isShowFullPriceInfo" class="promocode_block">
        <div class="promocode_description_block">
          <div class="main_promocode_description">
            <span class="promocode_name"> {{ product.promocode.name }} </span>
            <span class="promocode_description"> {{ product.promocode.description }}</span>
          </div>
          <div class="promocode_description_block_footer">
            <img src="../assets/clockIcon.svg" alt="clock" />
            <CustomTimer :time="new Date(promocodeEndDate)" />
          </div>
        </div>
        <img src="../assets/customBorderDashed.svg" />
        <div class="promocode_percent_block">
          <span class="promocode_percent">
            {{ '-' + product.price.discount.promocode.percent + '%' }}
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
import { mapGetters } from 'vuex'
import MoreInfoButton from './common/MoreInfoButton.vue'
import { useWindowSize } from '@vueuse/core'

export default {
  setup() {
    const { width } = useWindowSize()
    return {
      width
    }
  },
  props: {
    toggle: Boolean
  },
  components: {
    CustomTimer,
    MoreInfoButton
  },
  data() {
    return {
      promocodeEndDate: null,
      isShowFullPriceInfo: true
    }
  },
  methods: {
    priceHandler(type) {
      const priceResult = {
        ['CURRENT']: this.toggle
          ? this.product.price.current + this.product.price.symbol
          : this.product.price.wholesale + this.product.price.symbol,
        ['OLD']: this.toggle
          ? this.product.price.old + this.product.price.symbol
          : this.product.price.wholesaleOld + this.product.price.symbol,
        ['SECOND_OPTION_OF_PRICE']: this.toggle
          ? 'Оптовая цена: ' + this.product.price.wholesale + this.product.price.symbol
          : 'Розничная цена: ' + this.product.price.retail + this.product.price.symbol
      }

      return priceResult[type]
    },
    showFullPriceInfo(isShowFullPriceInfo) {
      this.isShowFullPriceInfo = isShowFullPriceInfo
    }
  },
  computed: {
    ...mapGetters({
      product: 'product'
    })
  },
  created() {
    this.promocodeEndDate = this.product.promocode.endedAt
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

@media screen and (max-width: 1295px) {
  .price_block_items {
    flex-wrap: wrap;
  }
  .prices {
    width: 100%;
  }
  .promocode_block {
    width: 100%;
  }
  .price_block_header {
    background: white;
    padding: 0;
  }
  .price_block_header_text {
    color: #282828;
  }
}
</style>
