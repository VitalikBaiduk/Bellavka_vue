import { API } from '@/API'
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
    },
    loading: (state) => {
      return state.loading
    },
    isActiveModal: (state) => {
      return state.isActiveModal
    },
    activeItems: (state) => {
      return state.activeItems
    },
    modalData: (state) => {
      return state.modalData
    }
  },
  actions: {
    async getProductData({ state, commit }) {
      try {
        commit('setLoading', true)
        const { data } = await API.getProduct(
          '94756956?include=category,colors,fabrics,heights,kits,sizes,photos,videos,otherColors,recommended'
        )
        commit('setProduct', data)
      } catch (e) {
        alert('Error')
      } finally {
        commit('setLoading', false)
      }
    }
  },
  mutations: {
    setProduct(state, data) {
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

      const product = { ...data.data, aboutProductData, shipmentData }

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
  }
})
