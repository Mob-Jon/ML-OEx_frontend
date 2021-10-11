import axios from 'axios'
import * as userTypes from '../types/users'

export default {
  auth: {
    state: {
      user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
      token: sessionStorage.token ? sessionStorage.getItem('token') : null,
    },
  },
  state: {
    namespaced: true,
    //   userInfo: [{
    //     status: '',
    //     name: '',
    //     userEmail: '',
    //     password: '',
    //     confirmPassword: '',
    //   }],
    user: {},

  },
  getters: {
    [userTypes.GETTER_LOGIN]: state => state.user,
    getUser: state => state.user,
    authenticated: state => state.token !== null,
    token: state => state.token,

  },
  actions: {
    async [userTypes.ACTION_SET_LOGIN]({ commit }, data) {
      axios.post('/adminlogin', data).then(response => {
        commit(userTypes.MUTATION_SET_LOGIN, response.data)
        console.log(response)
      }).catch(error => {
        console.log('error', error)
      })
    },
    async [userTypes.ACTION_SET_REGISTER]({ commit }, data) {
      axios.post('/register', data).then(response => {
        commit(userTypes.ACTION_SET_LOGIN, response.data)
        console.log(response)
      }).catch(error => {
        console.log('error', error)
      })
    },
  },
  mutations: {
    [userTypes.MUTATION_SET_LOGIN]: (state, user) => {
      state.user = user
    },
    [userTypes.MUTATION_SET_REGISTER]: (state, user) => {
      state.user = user
    },
  },
}
