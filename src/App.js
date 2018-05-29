import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [],
  };

  componentWillMount() {
    fetch("http://localhost:5000/api/todo/all")
      .then(data => data.json())
      .then(({ data: todos }) => {
        this.setState({ todos });
      });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <div key={todo._id}>
        <p>{todo.description}</p>
        <p>{todo.isComplete.toString()}</p>
      </div>
    ));
    return <div className="App">{todos}</div>;
  }
}

export default App;
