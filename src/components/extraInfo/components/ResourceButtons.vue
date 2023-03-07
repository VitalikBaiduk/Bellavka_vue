<template>
  <a v-if="buttonType === 'REVIEWS'" class="reviews_button">
    <img src="../../../assets/videoIcon.svg" alt="" />
    <span class="reviews_button_text"> +19 </span>
    <span class="reviews_button_text">Смотреть видеообзоры</span>
  </a>
  <a v-if="buttonType === 'FEEDBACK'" class="reviews_button">
    <img src="../../../assets/messageIcon.svg" alt="" />
    <span class="reviews_button_text"> +20 </span>
    <span class="reviews_button_text">Отзывы покупателей</span>
  </a>
  <a v-if="buttonType === 'QUESTIONS'" class="reviews_button">
    <img src="../../../assets/help.svg" alt="" />
    <span class="reviews_button_text"> +2 </span>
    <span class="reviews_button_text">Вопросы по модели</span>
  </a>
</template>

<script>
export default {
  props: {
    buttonType: String
  }
}
</script>

<style>
.reviews_button {
  position: relative;
  width: 100%;
  max-width: 245px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  border-color: #282828;
  padding: 15px 5px;
}
.reviews_button_text {
  font-size: 14px;
}

.reviews_button_text:nth-child(2) {
  margin: 0 4px;
  color: #bd9365;
}
</style>
