import React from "react";
import PropTypes from "prop-types";

import { List } from "semantic-ui-react";

const TodoItem = ({ description, isComplete, addTodo }) => (
  <List.Item icon={isComplete ? "check circle outline" : "circle outline"} content={description} onClick={addTodo} />
);

TodoItem.propTypes = {
  addTodo: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default TodoItem;
