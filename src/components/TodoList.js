import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

import TodoItem from "./TodoItem";
import { addTodo } from "../actions/todos";

class TodoList extends Component {
  // state = { todos: [] };

  // componentWillMount() {
  //   fetch("http://localhost:5000/api/todo/all")
  //     .then(data => data.json())
  //     .then(({ data: todos }) => {
  //       this.setState({ todos });
  //     });
  // }
  handleClick = () => {
    this.props.addTodo();
  };

  render() {
    const todos = this.props.todos.map(todo => <TodoItem key={todo._id} {...todo} addTodo={this.handleClick} />);
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
  return bindActionCreators({ addTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
