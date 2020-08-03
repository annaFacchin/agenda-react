import { STATUM } from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
    store && store.list ? store.list.allIds : [];

export const getTodoById = (store, id) =>
    store && store.list && store.list.byIds ? { ...store.list.byIds[id], id } : {};

// selector that selects from the store using info from multiple reducers
export const getList = store =>
    getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByStatum = (store, statum) => {
    const allTodos = getList(store)
    switch (statum) {

        case STATUM.TODO:
            return allTodos.filter(todo => !todo.done);

        case STATUM.DONE:
            return allTodos.filter(todo => todo.done);

        case STATUM.ALL:
        default: return allTodos;

    }
}


