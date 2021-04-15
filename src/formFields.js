const personalInfoList = [
  {
    id: "01",
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: "02",
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  // {
  //   id: "03",
  //   name: "title",
  //   type: "select",
  //   placeholder: "Title",
  //   options: ["Mr", "Mrs", "Ms"],
  // },
  {
    id: "04",
    name: "file",
    type: "file",
    placeholder: "Photo",
  },
  {
    id: "05",
    name: "address",
    type: "text",
    placeholder: "Address",
  },
  {
    id: "06",
    name: "phoneNumber",
    type: "text",
    placeholder: "Phone number",
  },
  {
    id: "07",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "08",
    name: "description",
    type: "textarea",
    placeholder: "Description",
  },
];
const experienceList = [
  {
    id: "01",
    name: "position",
    type: "text",
    placeholder: "Position",
  },
  {
    id: "02",
    name: "company",
    type: "text",
    placeholder: "Company",
  },
  {
    id: "03",
    name: "city",
    type: "text",
    placeholder: "City",
  },
  {
    id: "04",
    name: "startDate",
    type: "date",
    placeholder: "Start Date",
  },
  {
    id: "05",
    name: "endDate",
    type: "date",
    placeholder: "End Date",
  },
  {
    id: "06",
    name: "summary",
    type: "textarea",
    placeholder: "Summary",
  },
];
const educationList = [
  {
    id: "01",
    name: "universityName",
    type: "text",
    placeholder: "University Name",
  },
  {
    id: "02",
    name: "city",
    type: "text",
    placeholder: "City",
  },
  {
    id: "03",
    name: "degree",
    type: "text",
    placeholder: "Degree",
  },
  {
    id: "04",
    name: "subject",
    type: "text",
    placeholder: "Subject",
  },
  {
    id: "05",
    name: "startDate",
    type: "date",
    placeholder: "Start Date",
  },
  {
    id: "06",
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
