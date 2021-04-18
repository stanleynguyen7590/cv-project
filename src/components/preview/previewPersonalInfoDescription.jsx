import React from "react";
const PreviewPersonalInfoDescription = props => {
  return (
    <>
      <p className="preview__body-headText">DESCRIPTION</p>
      <p className="preview__body-description text-justify">
        {props.data.description}
      </p>
    </>
  );
};

export default PreviewPersonalInfoDescription;
