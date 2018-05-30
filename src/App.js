import React, { Component } from "react";
import { Divider, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <Container>
        <TodoForm />
        <Divider horizontal>Your ToDo's</Divider>
        <TodoList />
      </Container>
    );
  }
}

export default App;
