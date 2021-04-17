import { v4 as uuidv4 } from "uuid";
const personalInfoList = [
  {
    id: uuidv4(),
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: uuidv4(),
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  // {
  //   id: uuidv4(),
  //   name: "title",
  //   type: "select",
  //   placeholder: "Title",
  //   options: ["Mr", "Mrs", "Ms"],
  // },
  {
    id: uuidv4(),
    name: "file",
    type: "file",
    placeholder: "Photo",
  },
  {
    id: uuidv4(),
    name: "address",
    type: "text",
    placeholder: "Address",
  },
  {
    id: uuidv4(),
    name: "phoneNumber",
    type: "text",
    placeholder: "Phone number",
  },
  {
    id: uuidv4(),
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: uuidv4(),
    name: "description",
    type: "textarea",
    placeholder: "Description",
  },
  {
    id: uuidv4(),
    name: "interests",
    type: "text",
    placeholder: "Interests",
  },

  {
    id: uuidv4(),
    name: "references",
    type: "text",
    placeholder: "References",
  },
];
const experienceList = [
  {
    id: uuidv4(),
    name: "position",
    type: "text",
    placeholder: "Position",
  },
  {
    id: uuidv4(),
    name: "company",
    type: "text",
    placeholder: "Company",
  },
  {
    id: uuidv4(),
    name: "city",
    type: "text",
    placeholder: "City",
  },
  {
    id: uuidv4(),
    name: "startDate",
    type: "date",
    placeholder: "Start Date",
  },
  {
    id: uuidv4(),
    name: "endDate",
    type: "date",
    placeholder: "End Date",
  },
  {
    id: uuidv4(),
    name: "summary",
    type: "textarea",
    placeholder: "Summary",
  },
];
const educationList = [
  {
    id: uuidv4(),
    name: "universityName",
    type: "text",
    placeholder: "University Name",
  },
  {
    id: uuidv4(),
    name: "city",
    type: "text",
    placeholder: "City",
  },
  {
    id: uuidv4(),
    name: "degree",
    type: "text",
    placeholder: "Degree",
  },
  {
    id: uuidv4(),
    name: "subject",
    type: "text",
    placeholder: "Subject",
  },
  {
    id: uuidv4(),
    name: "startDate",
    type: "date",
    placeholder: "Start Date",
  },
  {
    id: uuidv4(),
    name: "endDate",
    type: "date",
    placeholder: "End Date",
  },
];

const getField = list => {
  return list
    .map(item => item.name)
    .reduce((o, key) => ({ ...o, [key]: "" }), {});
};

export { personalInfoList, getField, educationList, experienceList };
