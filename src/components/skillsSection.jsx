import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const SkillsSection = props => {
  const handleChangeSkill = (e, index) => {
    const newSkillsArray = [...props.sectionData];
    if (e.target.name === "skill") {
      newSkillsArray[index]["skill"] = e.target.value;
    } else {
      newSkillsArray[index]["skillLevel"] = e.target.value;
    }
    props.setSectionData(newSkillsArray);
  };

  const handleAddSkill = e => {
    props.setSectionData(
      [...props.sectionData].concat({ skill: "", skillLevel: 0, id: uuidv4() })
    );
  };
  const handleDeleteSkill = e => {
    props.setSectionData(
      [...props.sectionData].slice(0, props.sectionData.length - 1)
    );
  };

  const renderSkillItem = (item, index) => {
    return (
      <Container key={item.id}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Form inline className="mb-3">
              <Form.Label className="my-1 mr-2">Skill</Form.Label>
              <Form.Control
                className="my-1 mr-sm-2"
                type="text"
                name="skill"
                defaultValue={props.sectionData[index]["skill"]}
                placeholder="Enter your skill here"
                onChange={e => handleChangeSkill(e, index)}
              ></Form.Control>
              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Skill Level
              </Form.Label>
              <Form.Control
                onChange={e => handleChangeSkill(e, index)}
                as="select"
                name="skillLevel"
                defaultValue={props.sectionData[index]["skillLevel"]}
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
              >
                <option value="0">Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Control>
            </Form>
          </Col>
          <Col xs={12} sm={12} md={12} lg={2}>
            <Button
              onClick={handleAddSkill}
              className="mr-3  mb-2"
              variant="primary"
              block
            >
              {" "}
              <i className="fas fa-plus mr-1"></i>New
            </Button>
          </Col>
          <Col xs={12} sm={12} md={12} lg={2}>
            <Button
              onClick={handleDeleteSkill}
              disabled={props.sectionData.length === 1}
              variant="danger"
              block
            >
              {" "}
              <i className="fas fa-trash-alt mr-1"></i>Delete
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <>
      <h4 className="mt-3">{props.title}</h4>
      {props.sectionData.map((item, index) => renderSkillItem(item, index))}
    </>
  );
};

export default SkillsSection;
