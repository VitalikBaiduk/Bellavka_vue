import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    product: {},
    loading: false,
    activeItems: {
      items: { activeSize: [], activeHeigth: null }
    },
    isActiveModal: false,
    modalData: { modalTitle: '', contentTitle: '', contentType: '' }
  },
  getters: {
    product: (state) => {
      return state.product
    }
  },
  mutations: {
    setProduct(state, product) {
      state.product = product
    },
    setLoading(state, isLoading: boolean) {
      state.loading = isLoading
    },
    setActiveSizes(state, items) {
      state.activeItems.items = items
    },
    setIsActiveModal(state, isActiveModal) {
      state.isActiveModal = isActiveModal
    },
    setModalData(state) {
      const modalData = {
        modalTitle:
          state.activeItems.items.activeSize.length === 0
            ? 'выберите размер'
            : state.activeItems.items.activeHeigth === null
            ? 'выберите рост'
            : '',
        contentTitle:
          state.activeItems.items.activeSize.length === 0
            ? 'Какой у вас размер?'
            : state.activeItems.items.activeHeigth === null
            ? 'Какой у вас рост?'
            : '',
        contentType:
          state.activeItems.items.activeSize.length === 0
            ? 'SIZE'
            : state.activeItems.items.activeHeigth === null
            ? 'HEIGTH'
            : ''
      }
      state.modalData = modalData
    }
  },
  actions: {
    async getProductData({ state, commit }) {
      try {
        commit('setLoading', true)
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
        const aboutProductData = {
          countryofOrigin: 'Республика Беларусь',
          equipment: data.data.kits
            ? data.data.kits.map((el: any) => {
                return el.value
              })
            : [''],
          season: [''],
          collection: [''],
          style: [''],
          material: data.data.fabrics
            ? data.data.fabrics.map((el: any) => {
                return el.value
              })
            : [''],
          composition: data.data.fabricText ? data.data.fabricText : '',
          height: data.data.heights
            ? data.data.heights.map((el: any) => {
                return el.value
              })
            : [''],
          description: data.data.description ? data.data.description : ''
        }

        const shipmentData = {
          fittingPrice: '499',
          courierPrice: '399',
          postPrice: '299',
          symbol: '₽'
        }

        commit('setProduct', { ...data.data, aboutProductData, shipmentData })
      } catch (e) {
        alert('Error')
      } finally {
        commit('setLoading', false)
      }
    }
  }
})
