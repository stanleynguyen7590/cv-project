import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import defaultImage from "../../img/default.png";

const PreviewHeader = props => {
  return (
    <Container>
      <Row className="preview__header">
        <Col className="preview__header-avatar" xs={12} md={4} lg={4} xl={4}>
          {props.data.file === "" ? (
            <Image src={defaultImage} />
          ) : (
            <Image src={props.data.file} />
          )}
        </Col>
        <Col className="preview__header-name" xs={12} md={8} lg={8} xl={8}>
          <p>{props.data.firstName + " " + props.data.lastName}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default PreviewHeader;
