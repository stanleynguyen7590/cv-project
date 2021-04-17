import React from "react";
import { Form, Row, Col } from "react-bootstrap";
const MyForm = props => {
  const isDataInArray = Array.isArray(props.defaultValue);
  return (
    <Form>
      {props.fieldList.map(item => (
        <Form.Group as={Row} key={item.id} controlId={item.id} className="mt-2">
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
                      defaultValue={
                        isDataInArray
                          ? props.defaultValue[props.index][item.name]
                          : props.defaultValue[item.name]
                      }
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
                    <Form.Label className="text-justify" column sm={2}>
                      {item.placeholder}
                    </Form.Label>
                    <Col sm={10}>
                      <Form.File
                        size="sm"
                        name={item.name}
                        type={item.type}
                        label={item.placeholder}
                        onChange={props.onUpload}
                        custom
                      />
                    </Col>
                  </>
                );
              case "textarea":
                return (
                  <>
                    <Form.Label column sm={2}>
                      {item.placeholder}
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        size="sm"
                        as={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        onChange={props.onChange}
                        rows={3}
                        defaultValue={
                          isDataInArray
                            ? props.defaultValue[props.index][item.name]
                            : props.defaultValue[item.name]
                        }
                      ></Form.Control>
                    </Col>
                  </>
                );
              case "date":
                return (
                  <>
                    <Form.Label column sm={2}>
                      {item.placeholder}
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        size="sm"
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        onChange={props.onChange}
                        defaultValue={
                          isDataInArray
                            ? props.defaultValue[props.index][item.name]
                            : props.defaultValue[item.name]
                        }
                      />
                    </Col>
                  </>
                );
              default:
                return (
                  <>
                    <Form.Label column sm={2}>
                      {item.placeholder}
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        size="sm"
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        onChange={props.onChange}
                        defaultValue={
                          isDataInArray
                            ? props.defaultValue[props.index][item.name]
                            : props.defaultValue[item.name]
                        }
                      />
                    </Col>
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
