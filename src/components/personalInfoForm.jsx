import React from "react";
import MyForm from "./common/myForm";

const PersonalInfoForm = props => {
  const handleSubmit = e => {
    console.log("Submitted");
    e.preventDefault();
  };

  const handleChange = e => {
    props.setPersonalInfo({
      ...props.personalInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h4>Personal Info</h4>
      <MyForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        fieldList={props.fieldList}
      ></MyForm>
    </>
  );
};
export default PersonalInfoForm;
