import axios from '../../libs/axios'

const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => state.user,
  StateToken: state => state.token,
}
const actions = {
  // async Register({ commit, dispatch }, form) {
  //   // const response =
  //   await axios.post('/register', form)
  //   console.log('AUTH.JS', await form)
  //   commit('setUser', form)
  //   await dispatch('LogIn', form)
  // },
  // FOR DEMO
  async Register({ commit }, form) {
    // const response =
    const response = await axios.post('/register', form)
    console.log('REGISTRATION RESPONSE', response)
    console.log('AUTH.JS', await form)
    commit('setUser', form)
    // await dispatch('UserLogin', form)
    return response
  },
  // ADMIN USER
  async LogIn({ commit }, User) {
    console.log('Calling Admin...')
    const response = await axios.post('/adminlogin', User)
    console.log('ADMIN RESPONSE', response)
    commit('setUser', response.data)
    commit('setToken', response.data.token)
    sessionStorage.setItem('token', response.data.token)
    return response
  },
  // OK NA
  // RESET PASSWORD
  async ResetPassword({ commit }, Email) {
    console.log('RESET__')
    console.log(Email)
    const response = await axios.post('/send/resetpassword', Email)
    console.log('RESET PASSWORD', response)
    commit('setUser', response.data)
    return response
  },
  // NORMAL USER
  async UserLogin({ commit }, User) {
    console.log('Calling Normal User...')
    const response = await axios.post('/login', User)
    console.log('USER RESPONSE', response)
    // console.log('USER', User)
    if (response.data.token) {
      commit('setUser', response.data)
      commit('setToken', response.data.token)
      sessionStorage.setItem('token', response.data.token)
    }
    return response
  },
  // async LogOut({ commit }, User) {
  //   const response = await axios.post('/logout', User)
  //   console.log('RESPONSE_', response)
  //   window.sessionstorage.clear()
  //   const user = null
  //   commit('logout', user)
  // },
  async LogOut({ commit }) {
    const token = null
    commit('logOut', token)
    console.log('TOKEN_', token)
  },

  // async logOut({ commit }, state) {
  //   state.token = null
  //   state.isLoggedIn = false
  //   sessionStorage.setItem('token', null)
  //   commit('/logout', null)
  // },
}
const mutations = {
  setUser(state, username) {
    state.user = username
  },
  StatePosts(state, posts) {
    state.posts = posts
  },
  setToken(state, token) {
    state.token = token
  },
  LogOut(state) {
    state.user = null
    state.posts = null
    state.token = null
    // sessionStorage.clear()
    window.sessionStorage.clear()
  },
}
const state = {
  user: null,
  posts: null,
  // token: sessionStorage.token ? sessionStorage.getItem('token') : null,
  token: sessionStorage.token ? sessionStorage.getItem('token') : null,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
