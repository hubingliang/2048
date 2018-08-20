import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    bestScore: 0,
  },
  mutations: {
    initGame(state) {
      state.score = 0
    },
    updateScore(state, payload) {
      state.score = payload
    },
    updateBestScore(state, payload) {
      console.log('update')
      state.bestScore = payload
    }
  },
  actions: {

  }
})
