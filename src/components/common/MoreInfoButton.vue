<template>
  <div class="more_info_button_wrapper">
    <span v-on:click="hideInfo" class="more_info_button_text"> Подробнее </span>
    <img
      :class="isShowInfo ? '' : 'hide_more_info'"
      src="../../assets/circle-double-down_gold.svg"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowInfo: true
    }
  },
  methods: {
    hideInfo() {
      this.isShowInfo = !this.isShowInfo
      this.$emit('setIsShowFullPriceInfo', this.isShowInfo)
    }
  }
}
</script>

<style>
.more_info_button_wrapper {
  display: flex;
  align-items: center;
}
.more_info_button_text {
  margin-right: 5px;
  font-size: 14px;
  color: #c49e74;
}
</style>
