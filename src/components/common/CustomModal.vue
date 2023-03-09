<template>
  <div class="modal_wrapper">
    <div class="modal_item">
      <span class="modal_title">
        {{ modalData.modalTitle }}
        <SizesComponent
          :title="modalData.contentTitle"
          :sizeData="sizeData"
          :type="modalData.contentType"
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
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      sizeData: null,
      modalSizes: [],
      modalHeigth: null,
      activeItemsData: null
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
    saveData(localModalSizes, localModalHeigth) {
      this.modalSizes = localModalSizes
      this.modalHeigth = localModalHeigth
    },
    closeModal() {
      if (this.modalSizes.length !== 0) {
        this.setActiveSizes({
          activeSize: this.modalSizes,
          activeHeigth: this.activeItemsData.items.activeHeigth
        })
      } else if (this.modalHeigth !== null) {
        this.setActiveSizes({
          activeSize: this.activeItemsData.items.activeSize,
          activeHeigth: this.modalHeigth
        })
      }
      this.setIsActiveModal(false)
    }
  },
  computed: {
    ...mapGetters({
      product: 'product',
      activeItems: 'activeItems',
      modalData: 'modalData'
    })
  },
  created() {
    this.activeItemsData = this.activeItems
    this.sizeData =
      this.modalData.contentType === 'HEIGTH' ? this.product.heights : this.product.sizes
  },
  updated() {
    this.setModalData()
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
