import React from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../redux-store/actions/actions";

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodoAction(this.state.input);
        this.setState({ input: "" });
    };


    render() {

        return (

            <div>
                <div>
                    <div>
                        <input type="text" id="titleInput" placeholder="insert title"
                            onChange={e => this.updateInput(e.target.value)}
                            value={this.state.input}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={this.handleAddTodo}>Add</button>
                </div>
            </div>


        );
    }
}

export default connect(
    null,
    { addTodoAction }
)(AddTodo);