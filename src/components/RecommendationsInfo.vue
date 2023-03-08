<template>
  <div class="recommendations_info_wrapper">
    <div class="recommendations_info_title">
      <span class="recommendations_title_text"> Вам может понравиться: </span>
      <span class="current_recommendation">
        {{ activeRecItem }} /
        <spam class="total_count_of_recommendations" color="{gray}">{{
          recommendations.length
        }}</spam>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendations: Array
  },
  data() {
    return {
      activeRecItem: 1
    }
  }
}
</script>

<style>
.recommendations_info_wrapper {
  position: relative;
  width: 100%;
  max-width: 330px;
  margin-top: 30px;
}

.recommendations_info_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recommendations_title_text {
  font-size: 20px;
}
.current_recommendation {
  margin-right: 15px;
  color: #b0afab;
}
.total_count_of_recommendations {
  color: #b0afab;
}
</style>
