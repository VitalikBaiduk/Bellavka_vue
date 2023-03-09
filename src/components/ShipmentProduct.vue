<template>
  <div class="shipment_wrapper">
    <span class="shipment_city">Доставка: {{ city }}</span>
    <span class="shipment_data" v-for="item in localShipmentData" :key="item">
      {{ item.label + item.value + product.shipmentData.symbol }}
    </span>
    <a class="change_button">Изменить</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    city: String
  },
  data() {
    return {
      localShipmentData: []
    }
  },
  computed: {
    ...mapGetters({
      product: 'product'
    })
  },
  created() {
    this.localShipmentData = [
      { label: 'С примеркой: от ', value: this.product.shipmentData.fittingPrice },
      { label: 'Курьером: от ', value: this.product.shipmentData.courierPrice },
      { label: 'Почтой: от ', value: this.product.shipmentData.postPrice }
    ]
  }
}
</script>

<style>
.shipment_wrapper {
  position: relative;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid;
  border-color: #dddddd;
  padding: 10px 20px;
  margin-top: 20px;
}
.shipment_city {
  font-weight: 600;
}
.shipment_data {
  margin-top: 10px;
}
.change_button {
  position: absolute;
  top: 10px;
  right: 25px;
  color: #c49e74;
  border-bottom: 1px solid #c49e74;
  cursor: pointer;
}

@media screen and (max-width: 1050px) {
  .shipment_wrapper {
    max-width: 100%;
    padding: 0;
    border: none;
    margin-top: 30px;
  }
}
</style>
