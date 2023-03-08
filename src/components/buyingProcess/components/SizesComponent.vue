<template>
  <div class="sizes_component_wrapper">
    <span> {{ title }}</span>
    <div class="sizes_block">
      <div
        v-for="(item, index) in sizeData"
        :key="index"
        v-on:click="onItemClick(type, item.id)"
        class="sizes_item"
        :class="{
          activeSizeItem: type === 'SIZE' ? isActiveSize(item.id) : isActiveHeigth(item.id)
        }"
      >
        <span>
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    title: String,
    sizeData: Array,
    type: String,
    isInModal: Boolean
  },
  data() {
    return {
      localActiveHeigth: null,
      localActiveSize: []
    }
  },

  methods: {
    ...mapMutations({
      setActiveSize: 'setActiveSize'
    }),
    isActiveSize(currentItemId) {
      const foundElement = this.isInModal
        ? this.localActiveSize.find((elem) => elem === currentItemId)
        : this.$store.state.activeItems.items.activeSize.find((elem) => elem === currentItemId)
      return !!foundElement
    },
    isActiveHeigth(currentItemId) {
      return this.isInModal
        ? this.localActiveHeigth === currentItemId
        : this.$store.state.activeItems.items.activeHeigth === currentItemId
    },
    onItemClick(type, id) {
      if (type === 'SIZE') {
        let foundElement = this.isActiveSize(id)
        if (this.isInModal) {
          foundElement
            ? (this.localActiveSize = this.localActiveSize.filter((elem) => elem !== id))
            : (this.localActiveSize = [...this.localActiveSize, id])
        } else {
          foundElement
            ? this.setActiveSize({
                activeSize: this.$store.state.activeItems.items.activeSize.filter(
                  (elem) => elem !== id
                ),
                activeHeigth: this.$store.state.activeItems.items.activeHeigth
              })
            : this.setActiveSize({
                activeSize: [...this.$store.state.activeItems.items.activeSize, id],
                activeHeigth: this.$store.state.activeItems.items.activeHeigth
              })
        }
      } else if (type === 'HEIGTH') {
        if (this.isInModal) {
          this.localActiveHeigth === id
            ? (this.localActiveHeigth = null)
            : (this.localActiveHeigth = id)
        } else {
          this.setActiveSize({
            activeSize: this.$store.state.activeItems.items.activeSize,
            activeHeigth: this.$store.state.activeItems.items.activeHeigth === id ? null : id
          })
        }
      }
    }
  }
}
</script>

<style>
.sizes_component_wrapper:first-child {
  margin-top: 20px;
}
.sizes_block {
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 30px;
}
.sizes_item {
  min-width: 65px;
  position: relative;
  text-align: center;
  border: 1px solid;
  border-color: #b0afab;
  border-radius: 7px;
  padding: 10px 0;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.4s;
}
.activeSizeItem {
  border-color: #bd9365;
  background-color: #bd9365;
}
.activeSizeItem span {
  color: white;
}
</style>
