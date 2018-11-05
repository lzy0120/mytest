import mutations from './mutations'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'

const token = {
  actions,
  getters,
  mutations,
  state
}

export default token
