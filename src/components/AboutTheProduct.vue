<template>
  <div class="about_the_product_wrapper">
    <div v-on:click="setHideInfo" class="about_the_product_title_block">
      <span class="about_the_product_title"> О товаре </span>
      <img
        src="../assets/circle-double-down.svg
      "
        :class="{ showInfo: hideInfo }"
      />
    </div>
    <span
      class="about_the_product_label"
      :class="{ hideInfo }"
      v-for="(item, index) in productdata"
      :key="index"
    >
      {{ item.label }}
      <span class="about_the_product_value"> {{ item.value }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      hideInfo: false,
      productdata: [
        {
          label: 'Страна производитель: ',
          value: this.data.countryofOrigin.length
            ? this.data.countryofOrigin
            : 'Республика Беларусь'
        },
        {
          label: 'Комплектация: ',
          value: this.data.equipment[0].length ? this.data.equipment.join() : 'платье'
        },
        {
          label: 'Сезон: ',
          value: this.data.season[0].length ? this.data.season.join() : 'демисезон'
        },
        {
          label: 'Коллекция: ',
          value: this.data.collection[0].length ? this.data.collection.join() : 'весна, весна2022'
        },
        {
          label: 'Стиль: ',
          value: this.data.style[0].length ? this.data.style.join() : 'на каждый день'
        },
        {
          label: 'Материал: ',
          value: this.data.material[0].length ? this.data.material.join() : 'текстиль'
        },
        {
          label: 'Состав: ',
          value: this.data.composition.length ? this.data.composition : 'полиэстер 95%, спандекс 5%'
        },
        {
          label: 'Рост: ',
          value: this.data.height[0].length ? this.data.height.join() + ' см' : '164 см'
        },
        {
          label: 'Описание: ',
          value: this.data.description.length
            ? this.data.description
            : 'Платье женское нарядно-повседневное на подкладке полуприлегающего силуэта, расширенное к низу. Выполнено из цветного креп-шифона (не тянется). Подкладка из креп-шифона (не тянется). Вырез горловины «лодочкой» на обтачке, рукав втачной, по низу собран на узкую резинку, по талии через шлевки протянут пояс из ткани. Длина платья – 113 см. Длина рукава – 48 см. Ширина рукава в пройме – 38 см. 50р – ОГ 106, ОТ 104, ОБ 144 52р – ОГ 110, ОТ 108, ОБ 148 54р – ОГ 114, ОТ 112, ОБ 152'
        }
      ]
    }
  },
  methods: {
    setHideInfo() {
      this.hideInfo = !this.hideInfo
    }
  }
}
</script>

<style>
.about_the_product_wrapper {
  width: 100%;
  max-width: 585px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.about_the_product_title_block {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.about_the_product_title {
  margin-right: 5px;
}
.about_the_product_label {
  margin-top: 8px;
  color: #b0afab;
}
.about_the_product_value {
  line-height: 150%;
  color: #282828;
}
.showInfo {
  transform: rotate(180deg);
}

.hideInfo {
  display: none;
}
</style>
