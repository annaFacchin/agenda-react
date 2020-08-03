import React from "react";
import { connect } from "react-redux";
import { toggleTodoAction } from "../redux-store/actions/actions";

const Todo = ({ singleTodo, toggleTodoAction }) => (
    <li onClick={() => toggleTodoAction(singleTodo.id)}>

        {singleTodo && singleTodo.done ? "[X]" : "[ ]"}{" "}
        <span>{singleTodo.id} {singleTodo.content}</span>

    </li>
);

export default connect(
    null, { toggleTodoAction }
)(Todo);