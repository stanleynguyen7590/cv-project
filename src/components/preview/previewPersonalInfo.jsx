import { Row, Col, Container } from "react-bootstrap";
const PreviewPersonalInfo = props => {
  return (
    <Container>
      <Row className="preview__personal-info">
        <Col className="preview__personal-info-section" xs={12} md={6} lg={2}>
          <Row>
            <Col xs={4} md={12}>
              <span className="preview__personal-info-section-header">
                DATE OF BIRTH
              </span>
            </Col>
            <Col xs={8} md={12}>
              <span className="preview__personal-info-section-data">
                {props.parseDateFull(props.data.dob)}
              </span>
            </Col>
          </Row>
        </Col>
        <Col className="preview__personal-info-section" xs={12} md={6} lg={2}>
          <Row>
            <Col xs={4} md={12}>
              <span className="preview__personal-info-section-header">
                PHONE
              </span>
            </Col>
            <Col xs={8} md={12}>
              <span className="preview__personal-info-section-data">
                {props.data.phoneNumber}
              </span>
            </Col>
          </Row>
        </Col>
        <Col className="preview__personal-info-section" xs={12} md={6} lg={4}>
          <Row>
            <Col xs={4} md={12}>
              <span className="preview__personal-info-section-header">
                EMAIL
              </span>
            </Col>
            <Col xs={8} md={12}>
              <span className="preview__personal-info-section-data">
                {props.data.email}
              </span>
            </Col>
          </Row>
        </Col>
        <Col className="preview__personal-info-section" xs={12} md={6} lg={4}>
          <Row>
            <Col xs={4} md={12}>
              <span className="preview__personal-info-section-header">
                ADDRESS
              </span>
            </Col>
            <Col xs={8} md={12}>
              <span className="preview__personal-info-section-data">
                {props.data.address}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PreviewPersonalInfo;
