import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List, Icon } from "semantic-ui-react";

import { toggleModal } from "../actions/editModal";

const TodoItem = ({ description, isComplete, deleteTodo, _id, toggleModal }) => (
  <List.Item>
    <List.Content floated="right">
      <Icon name="trash" onClick={() => deleteTodo(_id)} />
    </List.Content>
    <Icon name={isComplete ? "check circle outline" : "circle outline"} color={isComplete ? "green" : "red"} />
    <List.Content onClick={toggleModal}>{description}</List.Content>
  </List.Item>
);

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal }, dispatch);

export default connect(null, mapDispatchToProps)(TodoItem);
