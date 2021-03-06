import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

import TodoItem from "./TodoItem";
import EditModal from "./EditModal";
import { getTodos, deleteTodo } from "../actions/todos";

class TodoList extends Component {
  componentWillMount() {
    this.props.getTodos();
  }

  handleDeleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const todos = this.props.todos.map(todo => <TodoItem key={todo._id} {...todo} deleteTodo={this.handleDeleteTodo} />);
    return (
      <React.Fragment>
        <EditModal />
        <List divided relaxed>
          {this.props.isLoading ? <div>Loading...</div> : todos}
        </List>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ todos, isLoading }) => ({
  todos,
  isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getTodos, deleteTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
