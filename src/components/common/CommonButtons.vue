<template>
  <div
    v-if="type === 'IN_CART'"
    @click="$emit('callback')"
    class="common_button_wrapper"
    :class="{ in_card: type === 'IN_CART' }"
  >
    <img src="../../assets/blackCart.svg" alt="" />
    <span class="common_button_text">в корзину</span>
  </div>
  <div v-if="type === 'IN_ONE_CLICK'" @click="$emit('callback')" class="common_button_wrapper">
    <img src="../../assets/hand.svg" alt="" />
    <span class="common_button_text">купить в 1 клик</span>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  emits: ['callback']
}
</script>

<style>
.common_button_wrapper {
  width: 100%;
  max-width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid;
  border-color: #282828;
  border-radius: 25px;
  padding: 15px 0;
  cursor: pointer;
}
.in_card {
  background-color: #ffc543;
  border-color: #ffc543;
}
.common_button_text {
  text-transform: uppercase;
}

@media screen and (max-width: 1050px) {
  .common_button_wrapper {
    max-width: 95%;
  }
}
</style>
