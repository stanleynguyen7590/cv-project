import Header from "./components/header";
import { Redirect, Route, Switch } from "react-router-dom";
import PersonalInfoSection from "./components/personalInfoSection";
import SkillsSection from "./components/skillsSection";
import Section from "./components/section";
import Preview from "./components/preview";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  personalInfoList,
  experienceList,
  educationList,
  getField,
} from "./formFields";
function App() {
  const [personalInfo, setPersonalInfo] = useState(getField(personalInfoList));
  const [experience, setExperience] = useState([getField(experienceList)]);
  const [education, setEducation] = useState([getField(educationList)]);
  const [skills, setSkills] = useState([
    { skill: "", skillLevel: 0, id: uuidv4() },
  ]);
  const handlePrint = () => {
    console.log("print");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you wish to reset all fields?")) {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
      setPersonalInfo(getField(personalInfoList));
      setExperience([getField(experienceList)]);
      setEducation([getField(educationList)]);
      setSkills([{ skill: "", skillLevel: 0, id: uuidv4() }]);
    }
  };
  return (
    <React.Fragment>
      <Header title="My CV Application" />
      <main className="container">
        {" "}
        <div className="App">
          <Switch>
            <Route path="/personal-info">
              <PersonalInfoSection
                title={"Personal Information"}
                fieldList={personalInfoList}
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
              ></PersonalInfoSection>
            </Route>
            <Route path="/working-experience">
              <Section
                title={"Experience"}
                fieldList={experienceList}
                sectionData={experience}
                setSectionData={setExperience}
                getSectionField={() => getField(experienceList)}
              ></Section>
            </Route>
            <Route path="/education">
              <Section
                title={"Education"}
                fieldList={educationList}
                sectionData={education}
                setSectionData={setEducation}
                getSectionField={() => getField(educationList)}
              ></Section>
            </Route>
            <Route path="/skills">
              <SkillsSection
                title={"Skills"}
                sectionData={skills}
                setSectionData={setSkills}
              ></SkillsSection>
            </Route>
            <Route path="/preview">
              <Preview
                personalInfo={personalInfo}
                experience={experience}
                education={education}
                handlePrint={handlePrint}
                handleReset={handleReset}
              ></Preview>
            </Route>
            <Redirect from="/" exact to="/personal-info"></Redirect>
          </Switch>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
