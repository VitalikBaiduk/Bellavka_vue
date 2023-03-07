<template>
  <button @click="getData">sss</button>
  <p @click="addToFirst" v-if="Object.keys(productData).length > 0">
    {{ productData.data.fullName }}
  </p>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      first: 0,
      productData: {}
    }
  },
  methods: {
    addToFirst() {
      this.first += 1
    },
    async getData() {
      try {
        const { data } = await axios.get(
          'https://rest.bellavka.by/api/v1/products/94756956?include=category,colors,fabrics,heights,kits,sizes,photos,videos,otherColors,recommended',
          {
            data: {},
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }
        )
        this.productData = data
      } catch (e) {
        alert('Error')
      }
    }
  },
  async mounted() {
    await this.getData()
  }
}
</script>

<style></style>
