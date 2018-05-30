import React from "react";
import PropTypes from "prop-types";

import { List } from "semantic-ui-react";

const TodoItem = ({ description, isComplete }) => (
  <List.Item icon={isComplete ? "check circle outline" : "circle outline"} content={description} />
);

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default TodoItem;
