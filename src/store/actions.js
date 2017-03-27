import Vue from 'vue'
import * as types from './mutation-types'

const apiUrl = "http://localhost:3000/";

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
        commit(types.DELETE_HEROE, id)
      })
  },
  saveHeroe({ commit }, heroe) {
    if (!heroe.id) {
      heroe.id=new Date().getTime();
      return Vue.http.post(apiUrl + `heroes`, heroe)
        .then(response => {
          commit(types.SAVE_HEROE, heroe)
        })
    } else {

    }
  }
};
