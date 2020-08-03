import { ADD_TODO, TOGGLE_TODO, SET_STATUM } from './actionTypes';

let nextTodoId = 0;

// content = parameter of the arrowfunction
export const addTodoAction = content => ({
    type: ADD_TODO,
    payload: {
        id: nextTodoId++,
        content
    }
});

export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setStatumAction = statum => ({
    type: SET_STATUM,
    payload: { statum }
});