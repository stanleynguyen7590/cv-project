import React from "react";
import { Form, Button } from "react-bootstrap";
const MyForm = props => {
  return (
    <Form onSubmit={props.onSubmit}>
      {props.fieldList.map(item => (
        <Form.Group key={item.id} controlId={item.id} className="mt-2">
          {(() => {
            switch (item.type) {
              case "select":
                return (
                  <Form.Control
                    as={item.type}
                    size="sm"
                    name={item.name}
                    placeholder={item.placeholder}
                    onChange={props.onChange}
                    custom
                  >
                    {item.options.map(option => (
                      <option key={item.id + option}>{option}</option>
                    ))}
                  </Form.Control>
                );
              case "file":
                return (
                  <Form.File
                    size="sm"
                    key={item.id}
                    name={item.name}
                    type={item.type}
                    label={item.placeholder}
                    custom
                  />
                );
              case "textarea":
                return (
                  <Form.Control
                    size="sm"
                    as={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    onChange={props.onChange}
                    rows={3}
                  ></Form.Control>
                );
              default:
                return (
                  <Form.Control
                    size="sm"
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    onChange={props.onChange}
                  />
                );
            }
          })()}
        </Form.Group>
      ))}

      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
