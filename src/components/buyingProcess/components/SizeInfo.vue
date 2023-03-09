<template>
  <div class="size_info_wrapper">
    <div class="size_block_title_block">
      <span>Размеры:</span>
      <span class="size_table"> Таблица размеров</span>
    </div>
    <SizesComponent
      v-for="item in sizeData"
      :key="item"
      :title="index === 1 ? 'Рост:' : ''"
      :sizeData="item"
      :type="index === 0 ? 'SIZE' : 'HEIGTH'"
      :isInModal="false"
    />
  </div>
</template>

<script>
import SizesComponent from './SizesComponent.vue'
export default {
  props: {
    sizeData: Array
  },
  components: {
    SizesComponent
  }
}
</script>

<style>
.size_info_wrapper {
  width: 100%;
}
.size_block_title_block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.size_table {
  color: #c49e74;
  border-bottom: 1px solid #c49e74;
  cursor: pointer;
}
</style>
