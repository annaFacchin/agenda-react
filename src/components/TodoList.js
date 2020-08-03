import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { getTodosByStatum } from "../redux-store/selectors";

const TodoList = ({ list }) => (

    <ul style={{ listStyleType: "none" }}>
        {list && list.length
            ? list.map((singleTodo) => {
                return <Todo key={`singleTodo-${singleTodo.id}`} singleTodo={singleTodo} />
            })
            : "Nothing here"}
    </ul>

);

const mapStateToProps = state => {
    const { statum } = state;
    const list = getTodosByStatum(state, statum);
    return { list };
};

export default connect
    (mapStateToProps)(TodoList);