import React from "react";
import { Form, Input, Button, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";

import { toggleModal } from "../actions/editModal";
import { editTodo } from "../actions/todos";

const EditModal = ({ handleSubmit, toggleModal, editTodo, isOpen, editingId }) => {
  return (
    <Modal open={isOpen} onClose={toggleModal} basic size="small">
      <Form onSubmit={handleSubmit(editTodo)}>
        <Input>
          <Field name="description" component="input" type="text" placeholder="Type new todo" />
          <Button type="submit">Edit</Button>
        </Input>
      </Form>
    </Modal>
  );
};

const mapStateToProps = ({ editModal: { isOpen, editingId } }) => ({ isOpen, editingId });

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal, editTodo }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  reduxForm({ form: "editTodo" }),
)(EditModal);
