import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=oboqOZ4acyxxqGfamfvRHqFlVfllkaRn3hdSUJgB'
})

export default new Vuex.Store({
  state: {
    apod: {}
  },
  mutations: {

  },
  actions: {
    async getApod({ commit, dispatch }, query) {
      try {
        let res = await api.get(query)
        console.log(res)
        commit('setApod', res.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
