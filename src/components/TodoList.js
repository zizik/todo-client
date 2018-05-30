import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  // state = { todos: [] };

  // componentWillMount() {
  //   fetch("http://localhost:5000/api/todo/all")
  //     .then(data => data.json())
  //     .then(({ data: todos }) => {
  //       this.setState({ todos });
  //     });
  // }

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

export default connect(mapStateToProps)(TodoList);
