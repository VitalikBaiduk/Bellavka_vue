<template>
  <div class="links_to_brand_wrapper">
    <div class="delivery_block">
      <span class="delivery_availability">
        {{ deliveryAvailability ? deliveryAvailability : 'Не доступна для доставки' }}
      </span>
      <img src="../assets/brandLogo.svg" alt="logo" />
    </div>
    <a v-for="(item, index) in brandLinks" :key="index" class="link_to_brand">
      <span class="link_to_brand_text">{{ item.value }}</span>
      <img src="../assets/arrowRight.svg" alt="arrow" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    deliveryAvailability: String,
    brandLinks: Array
  }
}
</script>

<style>
.links_to_brand_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.delivery_block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delivery_availability {
  color: white;
  background-color: #db1048;
  border-radius: 6px;
  padding: 5px 10px;
}
.link_to_brand {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.link_to_brand:nth-child(2) {
  margin-top: 10px;
}
.link_to_brand_text {
  margin-right: 5px;
}
</style>
