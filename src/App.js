import Header from "./components/header";
import { Redirect, Route, Switch } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import PersonalInfoSection from "./components/personalInfoSection";
import SkillsSection from "./components/skillsSection";
import Section from "./components/section";
import Preview from "./components/preview/preview";
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  personalInfoList,
  experienceList,
  educationList,
  honourAwardList,
  certificateList,
  getField,
} from "./formFields";

import {
  personalInfoExample,
  experienceExample,
  skillExample,
  educationExample,
  honourAwardExample,
  certificateExample,
} from "./exampleCV";
function App() {
  const [personalInfo, setPersonalInfo] = useState(getField(personalInfoList));
  const [experience, setExperience] = useState([getField(experienceList)]);
  const [education, setEducation] = useState([getField(educationList)]);
  const [skills, setSkills] = useState([
    { skill: "", skillLevel: 0, id: uuidv4() },
  ]);
  const [honourAward, setHonourAward] = useState([getField(honourAwardList)]);
  const [certificate, setCertificate] = useState([getField(certificateList)]);

  const previewRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you wish to reset all fields? All fields' data will be lost"
      )
    ) {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
      setPersonalInfo(getField(personalInfoList));
      setExperience([getField(experienceList)]);
      setEducation([getField(educationList)]);
      setSkills([{ skill: "", skillLevel: 0, id: uuidv4() }]);
      setCertificate([getField(certificateList)]);
      setHonourAward([getField(honourAwardList)]);
    }
  };

  const handleLoadExample = () => {
    if (
      window.confirm(
        "Are you sure you wish to load example CV? All fields' data  will be lost!"
      )
    ) {
      setPersonalInfo(personalInfoExample);
      setExperience(experienceExample);
      setSkills(skillExample);
      setEducation(educationExample);
      setHonourAward(honourAwardExample);
      setCertificate(certificateExample);
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
            <Route path="/honours-awards">
              <Section
                title={"Honour & Awards"}
                fieldList={honourAwardList}
                sectionData={honourAward}
                setSectionData={setHonourAward}
                getSectionField={() => getField(honourAwardList)}
              ></Section>
            </Route>
            <Route path="/certificate">
              <Section
                title={"Certificates"}
                fieldList={certificateList}
                sectionData={certificate}
                setSectionData={setCertificate}
                getSectionField={() => getField(certificateList)}
              ></Section>
            </Route>
            <Route path="/preview">
              <Preview
                ref={previewRef}
                personalInfo={personalInfo}
                experience={experience}
                education={education}
                honourAward={honourAward}
                certificate={certificate}
                skills={skills}
                handleReset={handleReset}
                handleLoadExample={handleLoadExample}
                handlePrint={handlePrint}
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
