import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);
// 全局状态对象
const state = {
  heroes: []
};
// getters可以认为是 store 的计算属性
const getters={
  topHeroes:state=>{
    return state.heroes.slice(0, 4);
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

