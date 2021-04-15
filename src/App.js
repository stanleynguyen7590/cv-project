import Header from "./components/header";
import PersonalInfoSection from "./components/personalInfoSection";
import Section from "./components/section";
import Preview from "./components/preview";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  personalInfoList,
  experienceList,
  educationList,
  getField,
} from "./formFields";
function App() {
  const [personalInfo, setPersonalInfo] = useState(getField(personalInfoList));
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const handlePrint = () => {
    console.log("print");
  };
  const handleReset = () => {
    if (window.confirm("Are you sure you wish to reset all fields?")) {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
      setPersonalInfo(getField(personalInfoList));
      setExperience([]);
      setEducation([]);
    }
  };

  return (
    <main className="container">
      {" "}
      <Header title="My CV Application" />
      <div className="App">
        <PersonalInfoSection
          title={"Personal Information"}
          fieldList={personalInfoList}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        ></PersonalInfoSection>
        <Section
          title={"Experience"}
          fieldList={experienceList}
          sectionData={experience}
          setSectionData={setExperience}
          getSectionField={() => getField(experienceList)}
        ></Section>
        <Section
          title={"Education"}
          fieldList={educationList}
          sectionData={education}
          setSectionData={setEducation}
          getSectionField={() => getField(educationList)}
        ></Section>
        <Button onClick={handlePrint} variant="success" block>
          Print to PDF
        </Button>
        <Button onClick={handleReset} variant="danger" block>
          Reset
        </Button>
        <Preview
          personalInfo={personalInfo}
          experience={experience}
          education={education}
        ></Preview>
      </div>
    </main>
  );
}

export default App;
