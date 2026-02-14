// src/store/auth.js
import api from "../../composables/api";


export default {
  namespaced: true,

  state: () => ({
    isAuthenticated: false,
    accessToken: localStorage.getItem('token')||null,
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    accessToken: (state) => state.accessToken,
    user: (state) => state.user,
  },

  actions: {
    login(_, token) {
      console.log("here")
      api.loginWithSpotify();
    },

    authorize({commit},hash) {
    },

    setUser({ commit }, user) {
      commit('SET_USER', user)
    },

    logout({ commit }) {
      commit('LOGOUT')
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.accessToken = token
      state.isAuthenticated = !!token
    },

    SET_USER(state, user) {
      state.user = user
    },

    LOGOUT(state) {
      state.accessToken = null
      state.user = null
      state.isAuthenticated = false
    },
  },

  

  
}
