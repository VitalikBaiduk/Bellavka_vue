<template>
  <div class="modal_wrapper">
    <div class="modal_item">
      <span class="modal_title">
        {{ this.$store.state.modalData.modalTitle }}
        <SizesComponent
          :title="this.$store.state.modalData.contentTitle"
          :sizeData="sizeData"
          :type="this.$store.state.modalData.contentType"
          :isInModal="true"
          @saveData="saveData"
        />
      </span>
      <a v-on:click="closeModal" class="save_button_wrapper">
        <span class="save_button_text"> Сохранить </span>
      </a>
    </div>
  </div>
</template>

<script>
import SizesComponent from '../buyingProcess/components/SizesComponent.vue'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      sizeData:
        this.$store.state.modalData.contentType === 'HEIGTH'
          ? this.$store.state.product.heights
          : this.$store.state.product.sizes
    }
  },
  components: {
    SizesComponent
  },
  methods: {
    ...mapMutations({
      setIsActiveModal: 'setIsActiveModal',
      setModalData: 'setModalData',
      setActiveSizes: 'setActiveSizes'
    }),
    saveData(modalSizes, modalHeigth) {
      console.log(modalHeigth)
      if (modalSizes.length !== 0) {
        this.setActiveSizes({
          activeSize: modalSizes,
          activeHeigth: this.$store.state.activeItems.items.activeHeigth
        })
      } else if (modalHeigth !== null) {
        this.setActiveSizes({
          activeSize: this.$store.state.activeItems.items.activeSize,
          activeHeigth: modalHeigth
        })
      }
    },
    closeModal() {
      this.setIsActiveModal(false)
      console.log(Object.keys(this.modalData).length)
      // сделать так чтобы не закрывалось при нажатии на модалку
    }
  }
}
</script>

<style>
.modal_wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.modal_item {
  background-color: white;
  border-radius: 6px;
  padding: 30px 120px 45px 60px;
}
.modal_title {
  text-transform: uppercase;
  font-size: 34px;
  font-weight: 600;
}
.save_button_wrapper {
  cursor: pointer;
  background: #bd9365;
  border-radius: 25px;
  padding: 13px 55px;
}
.save_button_text {
  color: white;
}
</style>
