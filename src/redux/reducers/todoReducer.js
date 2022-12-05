import { ADD_TODO } from "../types/todoTypes"

const initialState ={
    todoList: [{id: new Date().getTime(),
    text:"",
    completed: false}]
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

     case ADD_TODOs:
        return { ...state, ...payload }

    default:
        return state
  }
}
