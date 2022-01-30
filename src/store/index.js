import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    order: [],
    deleteOrders: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE (state, payload) {
      state.products = payload
      console.log(payload)
    },
    REMOVE_PRODUCT (state, id) {
      const index = state.products.findIndex(item => item.id === id)
      state.products.splice(index, 1)
    },
    UPDATE_PRODUCT (state, { id, name }) {
      const idx = state.products.findIndex(product => product.id === id)
      const product = state.products[idx]
      state.products[idx] = { ...product, name: name }
    },
    ADD_ORDER (state, payload) {
      state.order.push(payload)
    },
    DELETE_ORDER (state, payload) {
      state.deleteOrders.push(payload)
    }
  },
  actions: {
    GetProductsFromApi ({ commit }) {
      Axios.get('https://webtest.it.ua/testApp/api/products')
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    removePRODUCT ({ commit }, id) {
      commit('REMOVE_PRODUCT', id)
    },
    updateProduct ({ commit }, payload) {
      commit('UPDATE_PRODUCT', payload)
    },
    addORDER ({ commit }, payload) {
      commit('ADD_ORDER', payload)
    },
    deleteORDER ({ commit }, payload) {
      commit('DELETE_ORDER', payload)
    }
  },
  modules: {
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    }
  }
})
