import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {
        title:'Todo item 1',
        completed:true
      },
      {
        title:'Todo item 2',
        completed:false
      }
      ,
      {
        title:'Todo item 3',
        completed:true
      }
      ,
      {
        title:'Todo item 4',
        completed:false
      }
      ,
      {
        title:'Todo item 5',
        completed:true
      }
      ,
      {
        title:'Todo item 6',
        completed:false
      }
    ]
  },
  mutations: {
    ADD_TODO(state,paramValue)
    {
      state.todos.push(paramValue);
    },
    REMOVE_ITEM(state,itemNo)
    {
      state.todos.splice(itemNo,1);
    },
    TOGGLE_STATUS(state,todo)
    {
     todo.completed = !todo.completed;
    }
  },
  actions: {
    addTodoItem({commit},item)
    {
      commit('ADD_TODO',item);
    },
    removeTodoItem({commit},itemNo)
    {
      commit('REMOVE_ITEM',itemNo);
    },
    toggleTodoStatus({commit},todo)
    {
      commit('TOGGLE_STATUS',todo);
    }
  },
  getters: {
    returnCompletedTodo(state)
    {
        return state.todos.filter(todo => {
          return todo.completed == true
        }).length; 
    },
    returnNotCompletedTodo(state)
    {
        return state.todos.filter(todo => {
          return todo.completed == false
        }).length; 
    }
  },
  modules: {
  }
})
