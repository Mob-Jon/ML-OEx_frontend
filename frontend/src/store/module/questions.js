// import { data } from 'jquery'
import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

// important ni siya
/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  state: {
    namespaced: true,
    questions: {},
    // courses: {},
    show: true,
    index: null,
    token: sessionStorage.getItem('token'),
  },
  getters: {
    // [questionTypes.GETTER_QUESTION]: state => state.questions,
    // GET_QUESTION(state) {
    //   return state.questions
    // },
    GET_INDEX: state => state.index,
    GET_QUESTION: state => state.questions,
    // GET_COURSES: state => state.courses,
  },
  actions: {
    // Done
    ACTION_GET_QUESTIONS({ commit }) {
      api.get('/questions', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(res => res).then(choice => {
          const questions = choice.data.data.map(c => {
            c.choices = JSON.parse(c.choices)
            return c
          })
          console.log(questions)
          commit('SET_QUESTION', questions)
        })
    },
    // Done
    async ACTION_ADD_QUESTION({ commit, dispatch }, addQuestion) {
      const response = await api.post('/questions/add', addQuestion, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log('ADD QUESTION', response.data.questions)
      commit('SET_QUESTION', response.data.questions)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    // async ACTION_GET_COURSE({ commit }) {
    //   const response = await api.get('/course')
    //   console.log(response.data.courses)
    //   commit('SET_COURSES', response.data)
    //   return response.data
    // },
    // OK NA
    // async ACTION_ADD_COURSE({ commit }, addCourse) {
    //   const response = await api.post('/course/add', addCourse)
    //   commit('SET_COURSES', response)
    //   return response
    // },
    // Done
    async ACTION_DELETE_QUESTION({ dispatch }, id) {
      const response = await api.delete(`questions/delete/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      // const response = await api.delete('questions/delete/{id}')
      console.log(response)
      // commit(questionTypes.MUTATION_DELETE_QUESTION, id)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    // Update
    async ACTION_UPDATE_QUESTION({ dispatch }, id) {
      const response = await api.put(`questions/delete/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log(response)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
  },
  mutations: {
    SET_QUESTION(state, questions) {
      state.questions = questions
    },
    // SET_COURSES(state, courses) {
    //   state.courses = courses
    // },
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, question) => {
      // state.questions.unshift(question)
      // state.questions.push(question)
      state.questions = question
    },
  },
}
