import { TODO_ADD, TODO_COMPLETE, TODO_SET_FILTER } from '../constants/actionTypes';
export function addTodo(text) {
  return { type: TODO_ADD, text }
}

export function completeTodo(index) {
  return { type: TODO_COMPLETE, index }
}

export function setFilter(filter) {
  return { type: TODO_SET_FILTER, filter }
}
