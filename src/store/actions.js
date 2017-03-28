import ajax from 'axios';
import * as types from './mutation-types'
import {apiUrl} from '@/api'

export default {
  getAllHeroes({ commit }) {
    return ajax.get(apiUrl + 'heroes')
      .then(response => {
        commit(types.GET_ALL_HEROES, response.data)
      })
  },
  deleteHeroe({ commit }, id) {
    return ajax.delete(apiUrl + `heroes/${id}`)
      .then(response => {
        commit(types.DELETE_HEROE, id);
      })
  },
  saveHeroe({ commit }, heroe) {
    let heroeNew=Object.assign({},heroe);
    if (!heroeNew.id) {
      return ajax.post(apiUrl + `heroes`,heroeNew)
      .then(response => {
        heroeNew.id=response.data.id;
        commit(types.SAVE_HEROE, heroeNew);
      });
    } else {
      return ajax.put(apiUrl + `heroes/${heroeNew.id}`,heroeNew)
      .then(response => {
        commit(types.SAVE_HEROE, heroeNew);
      });
    }
  }
};
