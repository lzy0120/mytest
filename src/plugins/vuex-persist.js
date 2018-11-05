import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  key: '__shigongguanjia__',
  storage: window.sessionStorage
})

export default vuexLocal
