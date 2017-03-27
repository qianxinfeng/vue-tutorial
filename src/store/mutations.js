import * as types from './mutation-types'

export default {
  [types.GET_ALL_HEROES] (state, heroes) {
    state.heroes = heroes;
  },
  [types.SAVE_HEROE] (state, heroe) {
    state.heroes.push(heroe);
  },
  [types.DELETE_HEROE] (state, id) {
    let heroes=state.heroes;
    let index=heroes.findIndex(x=>x.id==id);
     heroes.splice(index, 1);
  }
};
