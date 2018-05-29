import React, { Component } from "react";
import { List } from "semantic-ui-react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = { todos: [] };

  componentWillMount() {
    fetch("http://localhost:5000/api/todo/all")
      .then(data => data.json())
      .then(({ data: todos }) => {
        this.setState({ todos });
      });
  }

  render() {
    const todos = this.state.todos.map(todo => <TodoItem key={todo._id} {...todo} />);
    return (
      <List divided relaxed>
        {todos}
      </List>
    );
  }
}

export default TodoList;
