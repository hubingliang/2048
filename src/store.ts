import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    bestScore: 0,
    gameBox: [],
  },
  mutations: {
    initScore(state) {
      state.score = 0
    },
    updateScore(state, payload) {
      state.score = payload
    },
    updateBestScore(state, payload) {
      state.bestScore = payload
    },
    setGameBox(state, payload) {
      state.gameBox = payload
    }
  },
  actions: {

  }
})
