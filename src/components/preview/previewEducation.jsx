import { ProgressBar } from "react-bootstrap";
import React from "react";
const PreviewEducation = props => {
  const renderEducationItem = index => {
    return (
      <React.Fragment key={index}>
        <div className="d-flex justify-content-between my-2">
          <div>
            <span className="preview__body-icon mr-2">
              <i className="fas fa-graduation-cap preview"></i>
            </span>
            <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
              {props.data[index].universityName + ", " + props.data[index].city}
            </span>
          </div>
          <div className="preview__body-date">
            <span>
              {props.parseData(props.data[index].startDate) + " "}
              <i className="fas fa-arrow-right"></i>{" "}
            </span>
            <span> {props.parseData(props.data[index].endDate)} </span>
          </div>
        </div>
        <div className="preview__body-subtitleText">
          <span>{props.data[index].degree}</span>
        </div>
        <div className="mb-3">
          <span>{props.data[index].subject}</span>
        </div>
      </React.Fragment>
    );
  };
  return (
    <div>
      <h2 className="preview__body-headText">EDUCATION</h2>
      <ProgressBar variant="success" now={15} style={{ height: "2px" }} />
      {props.data.map((item, index) => {
        return renderEducationItem(index);
      })}
    </div>
  );
};

export default PreviewEducation;
