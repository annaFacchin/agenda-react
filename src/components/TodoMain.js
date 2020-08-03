import React from 'react';

import AddTodo from './AddTodo';
import Statum from './Statum';
import TodoList from './TodoList';

function CalendarMain() {

    return (

        <div style={{ textAlign: "center" }}>
            <br></br>
            <h3>Todo List</h3>
            <AddTodo />
            <hr></hr>
            <Statum />
            <hr></hr>
            <TodoList />
        </div>
    );
}

export default CalendarMain;