const URL = 'http://localhost:3030/'

export const state = () => ({
  produtos: [],
  porodutosPopulares: []
})

export const getters = {
  getProdutos: (state) => {
    return state.produtos
  },
  getProdutosPopulares: (state) => {
    return state.porodutosPopulares
  }
}

export const mutations = {
  SET_PRODUTOS_POPULARES (state, payload) {
    state.porodutosPopulares.push(...payload)
  },
  SET_PRODUTOS (state, payload) {
    state.produtos.push(...payload)
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('GET_PRODUTOS_POPULARES')
  },
  async GET_PRODUTOS_POPULARES ({ commit }) {
    const { data } = await this.$axios.get(URL + 'products?limit=10&sortBy=percentage')
    commit('SET_PRODUTOS_POPULARES', data)
  },
  async GET_PRODUTOS ({ commit }) {
    const { data } = await this.$axios.get(URL + 'products')
    commit('SET_PRODUTOS', data)
  }
}
