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
  FilteredCars: (state) => (filter) => {
    console.log(filter)
    if (filter === '' || filter === undefined) {
    }
    return state.cars.filter((car) => {
      return car.title.toLowerCase().includes(filter.toLowerCase())
    })
  },
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
