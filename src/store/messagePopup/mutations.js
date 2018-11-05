import * as types from './mutation-types'

const mutations = {
  [types.SET_MESSAGE_POPUP_STATE] (state, messagePopupState) {
    state.messagePopupState = messagePopupState
  },
  [types.SET_MESSAGE_POPUP_OPTIONS] (state, messagePopupOptions) {
    state.messagePopupOptions = messagePopupOptions
  }
}

export default mutations
