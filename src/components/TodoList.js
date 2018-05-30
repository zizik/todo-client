import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

import TodoItem from "./TodoItem";
import { getTodos } from "../actions/todos";

class TodoList extends Component {
  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const todos = this.props.todos.map(todo => <TodoItem key={todo._id} {...todo} />);
    return (
      <List divided relaxed>
        {todos}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTodos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
