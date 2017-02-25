import { combineReducers } from 'redux';
import { TODO_SET_FILTER, TODO_ADD, TODO_COMPLETE } from '../constants/actionTypes';
import { FILTERS } from '../constants/filters';

function filter(state = FILTERS.SHOW_ALL, action) {
  switch (action.type) {
    case TODO_SET_FILTER:
      return action.filter;
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          text     : action.text,
          completed: false
        }
      ];
    case TODO_COMPLETE:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      });
    default:
      return state
  }
}

const todoApp = combineReducers({
  filter,
  todos
});

export default todoApp