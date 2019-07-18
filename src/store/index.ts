import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

// 引入模块
import home from './modules/home';
import imgdetail from './modules/imgdetail'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    imgdetail
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [createLogger()]
})
