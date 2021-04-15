import React from "react";
import { Button } from "react-bootstrap";
const DeleteButton = props => {
  return (
    <Button onClick={props.handleDelete} variant="warning" block>
      Delete
    </Button>
  );
};

export default DeleteButton;
