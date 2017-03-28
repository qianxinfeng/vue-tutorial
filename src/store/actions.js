import Vue from 'vue'
import * as types from './mutation-types'
import {apiUrl} from '@/api'

export default {
  getAllHeroes({ commit }) {
    return Vue.http.get(apiUrl + 'heroes')
      .then(response => {
        commit(types.GET_ALL_HEROES, response.data)
      })
  },
  deleteHeroe({ commit }, id) {
    return Vue.http.delete(apiUrl + `heroes/${id}`)
      .then(response => {
        commit(types.DELETE_HEROE, id);
      })
  },
  saveHeroe({ commit }, heroe) {
    let heroeNew=Object.assign({},heroe);
    if (!heroeNew.id) {
      return Vue.http.post(apiUrl + `heroes`,heroeNew)
      .then(response => {
        heroeNew.id=response.data.id;
        commit(types.SAVE_HEROE, heroeNew);
      });
    } else {
      return Vue.http.put(apiUrl + `heroes/${heroeNew.id}`,heroeNew)
      .then(response => {
        commit(types.SAVE_HEROE, heroeNew);
      });
    }
  }
};
