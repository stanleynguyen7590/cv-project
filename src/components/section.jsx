import React from "react";
import MyForm from "./common/myForm";
import DeleteButton from "./common/deleteButton";
import AddButton from "./common/addButton";
const Section = props => {
  const handleChange = (index, e) => {
    const changedSectionData = [...props.sectionData];
    changedSectionData[index] = {
      ...props.sectionData[index],
      [e.target.name]: e.target.value,
    };
    props.setSectionData(changedSectionData);
  };

  const handleDelete = e => {
    if (window.confirm("Are you sure you wish to delete this item")) {
      props.setSectionData(
        props.sectionData.slice(0, props.sectionData.length - 1)
      );
    }
  };

  const handleAdd = e => {
    props.setSectionData(props.sectionData.concat(props.getSectionField()));
  };

  return (
    <React.Fragment>
      <h4 className="mt-3">{props.title}</h4>
      {props.sectionData.length !== 0 &&
        props.sectionData.map((item, index) => (
          <React.Fragment key={index}>
            <MyForm
              onUpload={null}
              onChange={e => handleChange(index, e)}
              defaultValue={props.sectionData}
              fieldList={props.fieldList}
              index={index}
            ></MyForm>
            <DeleteButton handleDelete={handleDelete}></DeleteButton>
          </React.Fragment>
        ))}
      <AddButton handleAdd={handleAdd}></AddButton>
    </React.Fragment>
  );
};
export default Section;
