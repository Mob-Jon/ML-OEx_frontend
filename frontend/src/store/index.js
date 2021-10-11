import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import questionnaire from '@/store/module/questionnaire'
import auth from '@/store/module/auth'
import questions from '@/store/module/questions'
import users from '@/store/module/users'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    questions,
    users,
    auth,
    questionnaire,
  },
  // strict: process.env.DEV,
})
