import React from "react";
import MyForm from "./common/myForm";

const PersonalInfoSection = props => {
  const handleChange = e => {
    props.setPersonalInfo({
      ...props.personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = e => {
    props.setPersonalInfo({
      ...props.personalInfo,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <>
      <h4>{props.title}</h4>
      <MyForm
        onChange={handleChange}
        onUpload={handleUpload}
        fieldList={props.fieldList}
      ></MyForm>
    </>
  );
};
export default PersonalInfoSection;
