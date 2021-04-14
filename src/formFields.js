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
  {
    id: "03",
    name: "title",
    type: "select",
    placeholder: "Title",
    options: ["Mr", "Mrs", "Ms"],
  },
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
    type: "number",
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

const getPersonalInfo = list => {
  return list
    .map(item => item.name)
    .reduce((o, key) => ({ ...o, [key]: "" }), {});
};

export { personalInfoList, getPersonalInfo };
