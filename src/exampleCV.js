import { v4 as uuidv4 } from "uuid";
import defaultImage from "./img/vegito-1024x1024.jpg";

const personalInfoExample = {
  id: uuidv4(),
  firstName: "Vegeta",
  lastName: "",
  dob: "1990-01-01",
  file: defaultImage,
  address: "4397 Aaron Smith Drive Harrisburg PA 17101",
  phoneNumber: "895 555 555",
  email: "youremail@gmail.com",
  description:
    "Web Developer with 5+ years of experience in designing and devloping user interfaces, testing, debugging and training staff within eCommerce technologies. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies",
  interests: "Reading, Travelling, Eating",
  references: "Ms. Jane Smith, Invade Mars Inc. Contact Number: 6677 8877",
};

const experienceExample = [
  {
    position: "WEB DEVELOPER",
    company: "Focus Solutions",
    city: "Fullerton, CA",
    startDate: "2013-06-01",
    endDate: "2016-08-01",
    summary:
      "Developed Dynamic and interactive website that ensured high traffic, page views, and user experience, resulting in 40% increase in sales revenue. Oversaw full lifecycle of software development for 9 projects with 100% on-time delivery while staying 5% under budget. Implemented server that expedited document generation and search functionality by 20%, earning commendation and award from upper management. Designed processes for cleanup and performance improvement that minimized downtime by 13%",
  },
  {
    position: "WEB DEVELOPER",
    company: "Grooming Technologies",
    city: "Fullerton, CA",
    startDate: "2016-06-01",
    endDate: "2020-07-01",
    summary:
      "Revamped web application security applications, minimizing hacker attacks from 2.5% to 0.02%. Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%. Trained over 50 staff members in internal web functions, including steps on how to independently make minor updates and changes. Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed.",
  },
];
const educationExample = [
  {
    universityName: "California State University",
    city: "Fullerton, CA",
    degree: "Bachelor of Science",
    subject: "Web Development",
    startDate: "2007-07-01",
    endDate: "2011-07-01",
  },
  {
    universityName: "California State University",
    city: "Fullerton, CA",
    degree: "Master of Science",
    subject: "Web Security",
    startDate: "2012-07-01",
    endDate: "2014-07-01",
  },
];
const skillExample = [
  { skill: "PHP", skillLevel: 6, id: uuidv4() },
  { skill: ".NET", skillLevel: 7, id: uuidv4() },
  { skill: "SQL", skillLevel: 8, id: uuidv4() },
  { skill: "Javascript", skillLevel: 9, id: uuidv4() },
  { skill: "Photoshop", skillLevel: 8, id: uuidv4() },
];

const honourAwardExample = [
  {
    honourAwards: "Best employee of the month",
    date: "2013-11-11",
  },
  {
    honourAwards: "Best Saiyan web developer of 2015",
    date: "2015-11-11",
  },
];

const certificateExample = [
  {
    certificate: "Certified java programmer",
    date: "2011-11-11",
  },
];
export {
  personalInfoExample,
  experienceExample,
  skillExample,
  educationExample,
  honourAwardExample,
  certificateExample,
};
