import React from "react";
import { ProgressBar } from "react-bootstrap";
const PreviewExperience = props => {
  const renderExperienceItem = index => {
    return (
      <React.Fragment key={index}>
        <div className="d-flex justify-content-between my-2">
          <div>
            <span className="preview__body-icon mr-2">
              <i className="fas fa-briefcase"></i>
            </span>
            <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
              {props.data[index].company + ", " + props.data[index].city}
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
          {props.data[index].position}
        </div>
        <div className="mb-3 text-justify">{props.data[index].summary}</div>
      </React.Fragment>
    );
  };
  return (
    <div>
      <h2 className="preview__body-headText">WORKING EXPERIENCE</h2>
      <ProgressBar variant="success" now={15} style={{ height: "2px" }} />
      {props.data.map((item, index) => {
        return renderExperienceItem(index);
      })}
    </div>
  );
};

export default PreviewExperience;
