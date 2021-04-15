import React from "react";
import { Form } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
const MyForm = props => {
  return (
    <Form>
      {props.fieldList.map(item => (
        <Form.Group key={item.id} controlId={item.id} className="mt-2">
          {(() => {
            switch (item.type) {
              case "select":
                return (
                  <>
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
                  </>
                );
              case "file":
                return (
                  <>
                    <Form.Label>{item.placeholder}</Form.Label>
                    <Form.File
                      size="sm"
                      name={item.name}
                      type={item.type}
                      label={item.placeholder}
                      onChange={props.onUpload}
                      custom
                    />
                  </>
                );
              case "textarea":
                return (
                  <>
                    <Form.Label>{item.placeholder}</Form.Label>
                    <Form.Control
                      size="sm"
                      as={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      onChange={props.onChange}
                      rows={3}
                    ></Form.Control>
                  </>
                );
              case "date":
                return (
                  <>
                    <Form.Label>{item.placeholder}</Form.Label>
                    <Form.Control
                      size="sm"
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      onChange={props.onChange}
                    />
                  </>
                );
              default:
                return (
                  <>
                    <Form.Label>{item.placeholder}</Form.Label>
                    <Form.Control
                      size="sm"
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      onChange={props.onChange}
                    />
                  </>
                );
            }
          })()}
        </Form.Group>
      ))}
    </Form>
  );
};

export default MyForm;
