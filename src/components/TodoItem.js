import React from "react";
import PropTypes from "prop-types";

import { List } from "semantic-ui-react";

const TodoItem = ({ description, isComplete, deleteTodo, _id }) => (
  <List.Item icon={isComplete ? "check circle outline" : "circle outline"} content={description} onClick={() => deleteTodo(_id)} />
);

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
