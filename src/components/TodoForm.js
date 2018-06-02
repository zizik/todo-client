import React from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Button } from "semantic-ui-react";

import { addTodo } from "../actions/todos";

const TodoForm = props => {
  const { handleSubmit, addTodo } = props;
  return (
    <Form onSubmit={handleSubmit(addTodo)}>
      <div>
        <Input>
          <Field name="description" component="input" type="text" placeholder="Type new todo" />
          <Button type="submit">Add</Button>
        </Input>
      </div>
    </Form>
  );
};

export default compose(
  connect(null, dispatch => bindActionCreators({ addTodo }, dispatch)),
  reduxForm({
    form: "newTodo",
  }),
)(TodoForm);
