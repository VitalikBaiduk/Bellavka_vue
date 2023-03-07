<template>
  <div class="shipment_wrapper">
    <span class="shipment_city">Доставка: {{ city }}</span>
    <span class="shipment_data" v-for="(item, index) in shipmentData" :key="index">
      {{ item.label + item.value + $store.state.product.shipmentData.symbol }}
    </span>
    <a class="change_button">Изменить</a>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  },
  data() {
    return {
      shipmentData: [
        { label: 'С примеркой: от ', value: this.$store.state.product.shipmentData.fittingPrice },
        { label: 'Курьером: от ', value: this.$store.state.product.shipmentData.courierPrice },
        { label: 'Почтой: от ', value: this.$store.state.product.shipmentData.postPrice }
      ]
    }
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
</style>
