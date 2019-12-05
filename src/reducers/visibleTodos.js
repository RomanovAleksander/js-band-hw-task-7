import {
    SEARCH_IN_TODOS,
    PRIORITY_IN_TODOS,
    DONE_IN_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_TODO
} from '../actions'
import { initialState } from './todos';

const visibleTodos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_IN_TODOS:
            return payload.todos.filter(todo => todo.text.toLowerCase().includes(payload.searchText.toLowerCase()));

        case PRIORITY_IN_TODOS:
            return payload.priority === 'all' ?
                payload.todos :
                payload.todos.filter(todo => todo.priority.includes(payload.priority));

        case DONE_IN_TODOS:
            if (payload.done === 'open') {
                return payload.todos.filter(todo => todo.done === false);
            }
            if (payload.done === 'done') {
                return payload.todos.filter(todo => todo.done === true);
            }
            return payload.todos;

        case ADD_TODO:
            return [
                ...state,
                {
                    id: payload.id,
                    text: payload.text,
                    description: payload.description,
                    priority: payload.priority,
                    done: false,
                    showMenu: false
                }
            ];

        case REMOVE_TODO:
            return state.filter(todo => todo.id !== payload.id);

        case UPDATE_TODO:
            return state.map(todo => {
                return todo.id === payload.id ? {
                    id: payload.id,
                    text: payload.text,
                    description: payload.description,
                    priority: payload.priority
                } : todo
            });

        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === payload.id ?
                    { ...todo, done: !todo.done } :
                    todo
            );
        default:
            return state
    }
};

export default visibleTodos;