import Vue from 'vue'
import VConsole from 'vConsole'

const option = {
  maxLogNumber: 5000
}
const vConsole = new VConsole(option)
Vue.use(vConsole)
