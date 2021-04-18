import "../../css/preview.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import PreviewHeader from "./previewHeader";
import PreviewPersonalInfo from "./previewPersonalInfo";
import PreviewSkills from "./previewSkills";
import PreviewPersonalInfoDescription from "./previewPersonalInfoDescription";
import PreviewPersonalInfoInterest from "./previewPersonalInfoInterest";
import PreviewPersonalInfoReference from "./previewPersonalInfoReference";
import PreviewEducation from "./previewEducation";
import PreviewExperience from "./previewExperience";
import PreviewHonourAward from "./previewHonourAward";
import PreviewCertificate from "./previewCertificate";

class Preview extends Component {
  render() {
    const parseDateMonthYear = input => {
      const date = new Date(input);
      return `${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    const parseDateFull = input => {
      const date = new Date(input);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    return (
      <div>
        <PreviewHeader
          className="mt-3"
          data={this.props.personalInfo}
        ></PreviewHeader>
        <PreviewPersonalInfo
          data={this.props.personalInfo}
          parseDateFull={parseDateFull}
        ></PreviewPersonalInfo>
        <Container>
          <Row className="mt-3">
            <Col xs={12} md={12} lg={4}>
              <div className="preview__left-panel class">
                <PreviewPersonalInfoDescription
                  data={this.props.personalInfo}
                ></PreviewPersonalInfoDescription>
                <PreviewSkills data={this.props.skills}></PreviewSkills>
                <PreviewPersonalInfoInterest
                  data={this.props.personalInfo}
                ></PreviewPersonalInfoInterest>
                <PreviewPersonalInfoReference
                  data={this.props.personalInfo}
                ></PreviewPersonalInfoReference>
              </div>
            </Col>
            <Col xs={12} md={12} lg={8}>
              <div className="preview__right-panel">
                <PreviewEducation
                  data={this.props.education}
                  parseData={parseDateMonthYear}
                ></PreviewEducation>
                <PreviewExperience
                  data={this.props.experience}
                  parseData={parseDateMonthYear}
                ></PreviewExperience>
                <PreviewHonourAward
                  data={this.props.honourAward}
                  parseData={parseDateMonthYear}
                ></PreviewHonourAward>
                <PreviewCertificate
                  data={this.props.certificate}
                  parseData={parseDateMonthYear}
                ></PreviewCertificate>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="my-3 justify-content-center">
          <Col className="mb-2" xs={12} md={6} lg={4}>
            <Button onClick={this.props.handleReset} block variant="danger">
              RESET ALL FIELDS!
            </Button>
          </Col>
          <Col className="mb-2" xs={12} md={6} lg={4}>
            <Button onClick={this.props.handleLoadExample} block variant="info">
              LOAD EXAMPLE CV
            </Button>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <Button onClick={this.props.handlePrint} block variant="success">
              PRINT THE CV IN PDF FORMAT
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
// const Preview = props => {
//   const parseDateMonthYear = input => {
//     const date = new Date(input);
//     return `${date.getMonth() + 1}/${date.getFullYear()}`;
//   };
//   const parseDateFull = input => {
//     const date = new Date(input);
//     return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//   };

//   return (
//     <>
//       <PreviewHeader className="mt-3" data={props.personalInfo}></PreviewHeader>
//       <PreviewPersonalInfo
//         data={props.personalInfo}
//         parseDateFull={parseDateFull}
//       ></PreviewPersonalInfo>
//       <Container>
//         <Row className="mt-3">
//           <Col xs={12} md={12} lg={4}>
//             <div className="preview__left-panel class">
//               <PreviewPersonalInfoDescription
//                 data={props.personalInfo}
//               ></PreviewPersonalInfoDescription>
//               <PreviewSkills data={props.skills}></PreviewSkills>
//               <PreviewPersonalInfoInterest
//                 data={props.personalInfo}
//               ></PreviewPersonalInfoInterest>
//               <PreviewPersonalInfoReference
//                 data={props.personalInfo}
//               ></PreviewPersonalInfoReference>
//             </div>
//           </Col>
//           <Col xs={12} md={12} lg={8}>
//             <div className="preview__right-panel">
//               <PreviewEducation
//                 data={props.education}
//                 parseData={parseDateMonthYear}
//               ></PreviewEducation>
//               <PreviewExperience
//                 data={props.experience}
//                 parseData={parseDateMonthYear}
//               ></PreviewExperience>
//               <PreviewHonourAward
//                 data={props.honourAward}
//                 parseData={parseDateMonthYear}
//               ></PreviewHonourAward>
//               <PreviewCertificate
//                 data={props.certificate}
//                 parseData={parseDateMonthYear}
//               ></PreviewCertificate>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Row className="my-3 justify-content-center">
//         <Col className="mb-2" xs={12} md={6} lg={4}>
//           <Button onClick={props.handleReset} block variant="danger">
//             RESET ALL FIELDS!
//           </Button>
//         </Col>
//         <Col className="mb-2" xs={12} md={6} lg={4}>
//           <Button onClick={props.handleLoadExample} block variant="info">
//             LOAD EXAMPLE CV
//           </Button>
//         </Col>
//         <Col xs={12} md={12} lg={4}>
//           <Button onClick={props.handlePrint} block variant="success">
//             PRINT THE CV IN PDF FORMAT
//           </Button>
//         </Col>
//       </Row>
//     </>
//   );
// };

export default Preview;
