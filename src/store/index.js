import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import searchString from './modules/searchString'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    searchString
  }
})
