import { getField, updateField } from 'vuex-map-fields'
const state = () => ({
  test: null,
  FingerprintsCategory: null
})

const getters = {
  // getField: (state) => (field) => {
  //   console.log(state, field)
  //   return state[field]
  // }
  getField
}

const mutations = {
  // setField (state, { field, value }) {
  //   state[field] = value
  // }
  updateField
}

export default { state, mutations, getters }
