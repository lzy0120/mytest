import * as types from './mutation-types'

const mutations = {
  [types.SET_ORDER_DETAILS] (state, orderDetails) {
    state.orderDetails = orderDetails
  }
}

export default mutations
