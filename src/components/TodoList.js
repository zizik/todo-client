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
        {this.props.isLoading ? <div>Loading...</div> : todos}
      </List>
    );
  }
}

const mapStateToProps = ({ todos, isLoading }) => ({
  todos,
  isLoading,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTodos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
