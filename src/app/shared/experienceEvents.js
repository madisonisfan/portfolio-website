//import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
//import imageOne from "../assets/images/cartoonWebsite.jpg";
//import imageTwo from "../assets/images/cartoonWebsite2.jpg";
import HarvardX_Certificate from "../assets/images/HarvardX_Certificate.png";
import TrainrAI_ImageOne from "../assets/images/TrainrAI_Images/TrainrAI_ImageOne.PNG";
import TrainrAI_ImageTwo from "../assets/images/TrainrAI_Images/TrainrAI_ImageTwo.PNG";
import TrainrAI_ImageThree from "../assets/images/TrainrAI_Images/TrainrAI_ImageThree.PNG";
import Mealplanner_React from "../assets/images/mealplanner-react-recipes.png";
import Scholarship from "../assets/images/scholarship.jpeg";

export const EVENTS = [
  {
    id: 0,
    title: "TrainrAI",
    dateRange: "Nov 2021 - Current ",
    icon: "swift",
    subtitle: "Founder & Software Developer",
    achievements: [],
    description:
      "Teamed up with my dad to build an app that helps people create and stay consistent with healthy habits. This is my first SwiftUI project.",
    languages: ["SwiftUI"],
    librariesAndFrameworks: [],
    technology: ["SwiftUI", "Core Data", "CloudKit"],
    descriptionPoints: [
      "Created an iOS app in SwiftUI that helps people build healthy habits",
      "Distributed through TestFlight and being used by a small group of beta testers",
      "Users are able to check off daily tasks, add bonus tasks, complete a weekly fitness assessment, view their current “perfect day” streaks and track their fitness progress",
      "Learning and iterating on the app based on user feedback",
      "Participated in Founder University (Jason Calacanis initiative) to kick off the project: goal was to come up with an idea and launch it in 90 days which I was able to achieve",
    ],
    photos: [TrainrAI_ImageOne, TrainrAI_ImageTwo, TrainrAI_ImageThree],
  },
  {
    id: 1,
    title: "Nucamp Full Stack Bootcamp",
    dateRange: "Feb 2021 - July 2021",
    subtitle: "Earned the certificate of honors",
    icon: "react",
    achievements: ["Honors for final project"],
    description:
      "By the end of this bootcamp, I was able to build dynamic web and mobile app with the use of React and React Native. As part of the bootcamp, I was taught how to create a backend for a web app. On my own time, I taught myself how to build the backend for mobile apps. ",
    languages: ["JavaScript", "CSS/SCSS", "HTML"],
    descriptionPoints: [
      "Development of responsive websites using bootstrap framework",
      "Use React to create dynamic web applications. ",
      "Use React Native to build and deploy mobile applications",
      "Learn about and implement backend database operations, user authentication and application logic. ",
    ],
    librariesAndFrameworks: [
      "React",
      "React Native",
      "Redux",
      "Bootstrap",
      "jQuery",
    ],

    technology: [
      "JavaScript",
      "React",
      "ReactNative",
      "jQuery",
      "Redux",
      "Bootstrap",
    ],
    photos: [Mealplanner_React],
  },

  {
    id: 2,
    title: "Web Programming with Python and JavaScript",
    subititle: "HarvardX",
    dateRange: "Aug 2020 - Jan 2021",
    icon: "python",
    description:
      "This was my first true experience with web development. During the span of the course, I went from reviewing HTML to learning about various ways to test and security and scaling.",
    achievements: [],
    languages: ["JavaScript", "Python", "SQL", "CSS", "HTML"],
    librariesAndFrameworks: ["Django"],
    technology: ["JavaScript", "Python", "SQL", "Django"],
    photos: [
      HarvardX_Certificate,

      TrainrAI_ImageOne,
      TrainrAI_ImageTwo,
      TrainrAI_ImageThree,
    ],
    descriptionPoints: [
      "Self-directed online learning",
      "The course dove deep into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap. Topics include database design, scalability, security, and user experience.",
      "Testing methodologies",
      "Scaling and security ",
    ],
  },
  {
    id: 3,
    title: "Santa Monica College - CS Major",
    subitile: "Dean's Honor list - 2 Scholarships - STEM Program",
    icon: "laptop",
    description:
      "During the 2 years of my studies, I joined the STEM program and the computer science club as well.",
    achievements: ["Dean's Honor List", "2 Scholarships Through STEM program"],
    dateRange: "Sept 2018 - June 2020",
    languages: ["C", "C++", "HTML"],
    librariesAndFrameworks: [],
    technology: ["C", "C++", "HTML"],
    photos: [Scholarship],
  },
];

/*

{
    id: 5,
    title: "Graduated HighSchool",
    icon: "graduationCap",
    dateRange: "June 2018",
    achievements: ["4.0 GPA"],
    description:
      "Before graduating, I began learning computer science through a couple of high school classes and Codecademy",
    languages: [],
    librariesAndFrameworks: [],
  },

  */
