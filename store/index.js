const state = () => ({
  carMakes: [],
  cars: [],
})

const mutations = {
  setCarMakes(state, payload) {
    state.carMakes = payload
  },
  setAllCars(state, payload) {
    state.cars.push(...payload)
  },
}

const getters = {
  CarMakes: (state) => state.carMakes,
  AllCars: (state) => state.cars,
}

const actions = {
  async getCarMakes({ commit }) {
    const response = await fetch(
      'https://api.staging.myautochek.com/v1/inventory/make?popular=true'
    )
    const data = await response.json()
    commit('setCarMakes', data.makeList)
  },
  async getAllCars({ commit }) {
    const response = await fetch(
      `https://api.staging.myautochek.com/v1/inventory/car/search`
    )
    const data = await response.json()
    commit('setAllCars', data.result)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
