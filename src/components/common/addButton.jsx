import React from "react";
import { Button } from "react-bootstrap";
const AddButton = props => {
  return (
    <Button onClick={props.handleAdd} variant="primary" block>
      Add
    </Button>
  );
};

export default AddButton;
