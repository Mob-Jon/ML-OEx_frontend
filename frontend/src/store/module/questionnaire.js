// import { axios } from 'vue/types/umd'
import api from '../../libs/axios'
// import * as questionnaireTypes from '../types/questionnaire'
// import { ACTION_ADD_QUESTION } from '../types/questions'

export default {
  state: {
    namespaced: true,
    questionnaires: {},
    // courses: {},
    questions: {},
    createquestion: '',
    show: true,
    // index: null,
  },
  getters: {
    // [questionnaireTypes.GETTER_QUESTION]: state => state.questionnaires,
    GET_QUESTIONNAIRE: state => state.questionnaires,
    // GET_INDEX: state => state.index,
    // GET_COURSES: state => state.courses,
    // GET_QUESTION: state => state.questions,
  },
  actions: {
    async ACTION_GET_QUESTIONNAIRE({ commit }) {
      const response = await api.get('/questionnaire', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      // console.log(response)
      commit('SET_QUESTIONNAIRE', response.data.data)
      return response
    },
    async ACTION_ADD_QUESTIONNAIRE({ commit, dispatch }, questionnaire) {
      const response = await api.post('/questionnaire/create', questionnaire, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      // console.log(response.data.data)
      dispatch('ACTION_GET_QUESTIONNAIRE')
      commit('GET_QUESTIONNAIRE', response.data.data)
      return response
    },
    // async ACTION_GET_COURSES({ commit }) {
    //   const response = await api.get('/course')
    //   console.log(response.data.courses)
    //   commit('SET_COURSES', response.data)
    //   return response.data
    // },
    // async ACTION_GET_QUESTIONS({ commit }) {
    //   const response = await api.get('/questions')
    //   console.log(response.data.data)
    //   commit('SET_QUESTIONS', response.data)
    //   return response.data
    // },
    async ACTION_DELETE_QUESTIONNAIRE({ dispatch }, id) {
      const response = await api.delete(`/questionnaire/delete/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log(response)
      await dispatch('ACTION_GET_QUESTIONNAIRE')
      return response
    },
    async ACTION_SEND_QUESTIONNAIRE(sendQuestionnaire) {
      const response = await api.post('/send/invitation', sendQuestionnaire, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log(response)
      return response
    },
  },
  mutations: {
    // ADD_QUESTION(state, createquestion) {
    //   state.questions.unshift(createquestion)
    // },
    SET_QUESTIONNAIRE(state, questionnaires) {
      state.questionnaires = questionnaires
    },
    // [questionnaireTypes.MUTATION_ADD_QUESTION]: (state, questionnaires) => {
    //   state.questionnaires.unshift(questionnaires)
    // },
    // SET_COURSES(state, courses) {
    //   state.courses = courses
    // },
    // SET_QUESTIONS(state, questions) {
    //   state.questions = questions
    // },
    // [questionnaireTypes.MUTATION_ADD_QUESTIONNAIRE]: (state, questionnaire) => {
    //   state.questionnaires = questionnaire
    // },
    // [questionnaireTypes.MUTATION_ADD_QUESTIONNAIRE]: (state, questionnaire) => {
    //   state.questionnaires = questionnaire
    // },
  },
}
