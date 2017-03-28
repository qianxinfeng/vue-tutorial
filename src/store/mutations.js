import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.GET_ALL_HEROES] (state, heroes) {
    state.heroes = heroes;
  },
  [types.SAVE_HEROE] (state, heroe) {
     let heroes=state.heroes;
    let index=heroes.findIndex(x=>x.id==heroe.id);
    if(index==-1){
      heroes.push(heroe);
    }else{
      Vue.set(heroes, index, heroe)
    }
  },
  [types.DELETE_HEROE] (state, id) {
    let heroes=state.heroes;
    let index=heroes.findIndex(x=>x.id==id);
     heroes.splice(index, 1);
  }
};
