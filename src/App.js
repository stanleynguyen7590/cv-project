import Header from "./components/header";
// import MyForm from "./components/common/myForm";
import PersonalInfoForm from "./components/personalInfoForm";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { personalInfoList, getPersonalInfo } from "./formFields";
function App() {
  const [personalInfo, setPersonalInfo] = useState(
    getPersonalInfo(personalInfoList)
  );
  return (
    <main className="container">
      {" "}
      <Header title="My CV Application" />
      <div className="App">
        <PersonalInfoForm
          fieldList={personalInfoList}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        ></PersonalInfoForm>
      </div>
    </main>
  );
}

export default App;
