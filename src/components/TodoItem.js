import React from "react";
import PropTypes from "prop-types";

import { List, Icon } from "semantic-ui-react";

const TodoItem = ({ description, isComplete, deleteTodo, _id }) => (
  <List.Item>
    <List.Content floated="right">
      <Icon name="trash" onClick={() => deleteTodo(_id)} />
    </List.Content>
    <Icon name={isComplete ? "check circle outline" : "circle outline"} color={isComplete ? "green" : "red"} />
    <List.Content>{description}</List.Content>
  </List.Item>
);

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
