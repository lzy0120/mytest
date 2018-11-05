import * as types from './mutation-types'

const mutations = {
  [types.SET_GOODS_POPUP_STATE] (state, goodsPopupState) {
    state.goodsPopupState = goodsPopupState
  }
}

export default mutations
