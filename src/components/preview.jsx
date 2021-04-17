import "../css/preview.css";
import defaultImage from "../img/default.png";
import { Image, Button } from "react-bootstrap";
import React from "react";
const Preview = props => {
  const parseDate = input => {
    const date = new Date(input);
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  return (
    <div>
      <div className="preview__header">
        <div className="preview__header-1">
          {props.personalInfo.file === "" ? (
            <Image className="preview__header-avatar" src={defaultImage} />
          ) : (
            <Image
              className="preview__header-avatar"
              src={props.personalInfo.file}
              rounded
            />
          )}
        </div>
        <div className="preview__header-2 bg-light">
          <p>{props.personalInfo.description}</p>
        </div>
      </div>
      <div className="preview__header-name">
        {props.personalInfo.firstName + " " + props.personalInfo.lastName}
      </div>
      <div className="preview__body">
        <div className="preview__body-1 bg-light">
          <div className="preview__body-phone">
            <p>
              <strong>Phone:</strong>
            </p>
            <p>{props.personalInfo.phoneNumber}</p>
          </div>

          <div className="preview__body-email">
            <p>
              <strong>Email:</strong>
            </p>
            <p>{props.personalInfo.email}</p>
          </div>
        </div>
        <div className="preview__body-2 ">
          <div className="preview__body-experience">
            <div className="preview__body-experienceText">Experience</div>

            {props.experience.length !== 0 && (
              <ul>
                {props.experience.map((item, index) => (
                  <li key={index}>
                    <div className="preview__body-experience-date">
                      <span>{"From " + parseDate(item.startDate)}</span>
                      <span>{" To " + parseDate(item.endDate)}</span>
                      <p>{item.city}</p>
                    </div>
                    <div className="preview__body-experience-title">
                      <span>{item.position + " - "}</span>
                      <span>{item.company}</span>
                      <p>{item.summary}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="preview__body-education">
            <div className="preview__body-educationText">Education</div>
            {props.education.length !== 0 && (
              <ul>
                {props.education.map((item, index) => (
                  <li key={index}>
                    <div className="preview__body-education-date">
                      <span>{"From " + parseDate(item.startDate)}</span>
                      <span>{" To " + parseDate(item.endDate)}</span>
                    </div>
                    <div className="preview__body-education-summary">
                      <span>{item.degree + " - "}</span>
                      <span>{item.subject}</span>
                      <br></br>
                      <span>{item.universityName + ", "}</span>
                      <span>{item.city}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Button
        className="my-3"
        onClick={props.handlePrint}
        variant="success"
        block
      >
        Print to PDF
      </Button>
      <Button
        className="my-2"
        onClick={props.handleReset}
        variant="danger"
        block
      >
        Reset
      </Button>
    </div>
  );
};

export default Preview;
