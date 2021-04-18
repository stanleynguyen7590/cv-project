import React from "react";
import { ProgressBar } from "react-bootstrap";
const PreviewCertificate = props => {
  const renderCertificateItem = index => {
    return (
      <React.Fragment key={index}>
        <div className="d-flex justify-content-between my-2">
          <div>
            <span className="preview__body-icon mr-2">
              <i className="fas fa-certificate"></i>
            </span>
            <span>{props.data[index].certificate}</span>
          </div>
          <div className="preview__body-date">
            <span>{props.parseData(props.data[index].date)}</span>
          </div>
        </div>
      </React.Fragment>
    );
  };
  return (
    <div>
      <h2 className="preview__body-headText">CERTIFICATES</h2>
      <ProgressBar variant="success" now={15} style={{ height: "2px" }} />
      {props.data.map((item, index) => {
        return renderCertificateItem(index);
      })}
    </div>
  );
};

export default PreviewCertificate;
