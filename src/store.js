import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Stacie' },
    categories: ['sports', 'education', 'food', 'testing', 'more'],
    toDos: [
      { id: 1, text: '', done: true },
      { id: 2, text: '', done: false },
      { id: 3, text: '', done: true }
    ],
    events: [
      { id: 1, title: '...', organizer: 'Stacie' },
      { id: 2, title: '123', organizer: 'Stacie' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneToDos: state => {
      return state.toDos.filter(toDo => toDo.done)
    },
    activeToDosCount: state => {
      return state.toDos.filter(toDo => !toDo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
