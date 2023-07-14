import Scholarship from "../assets/images/scholarship.jpeg";
import ScholarshipTwo from "../assets/images/Scholarship2.png";
import Mealplanner_Home from "../assets/images/Mealplanner-react-honors/home-page.png";
import Mealplanner_Recipes from "../assets/images/Mealplanner-react-honors/recipes-page.png";
import Mealplanner_AddRecipe from "../assets/images/Mealplanner-react-honors/add-recipe-page.png";
import Mealplanner_Blog from "../assets/images/Mealplanner-react-honors/blog-page.png";
import HarvardX_Certificate from "../assets/images/HarvardX_Certificate.png";

export const EDUCATION = [
  {
    id: 0,
    title: "Nucamp Full Stack Bootcamp",
    subtitle: "Certificate of Honors",
    dateRange: "Feb 2021 - July 2021",
    description:
      "This bootcamp emphasized creating dynamic web and mobile apps using React and React Native. Additionally, we learned about backend development and how to utilize it in our projects.",
    images: [
      Mealplanner_Home,
      Mealplanner_Recipes,
      Mealplanner_AddRecipe,
      Mealplanner_Blog,
    ],
    mainTechnology: [
      "JavaScript",
      "React",
      "React Native",
      "Node.js",
      "Bootstrap",
      "Redux",
    ],
    allTechnology: [
      "JavaScript",
      "React",
      "ReactNative",
      "Node.js",
      "Bootstrap",
      "Express",
      //"Redux",
    ],
    descriptionPoints: [
      "Development of responsive web applications using React Bootstrap",
      "Used React Native to build hybrid mobile applications",
      "Learned and implemented backend database operations, user authentication, and application logic",
      "Provided valuable support to students by addressing their issues, offering assistance with complex topics, and aiding them with assignments",
    ],
  },

  {
    id: 1,
    title: "Web Programming with Python and JavaScript",
    subtitle: "Certificate",
    dateRange: "Aug 2020 - Jan 2021",
    description:
      "Throughout the course, I explored the various aspects of web development, gaining a strong foundation in its principles and acquiring a solid understanding of the key components involved.",
    images: [HarvardX_Certificate],
    mainTechnology: ["JavaScript", "Python", "SQL", "CSS", "Django"],
    allTechnology: [
      "JavaScript",
      "Python",
      "SQL",
      "React",
      "Django",
      "CSS",
      "HTML",
      //"Visual Studio Code",
    ],
    descriptionPoints: [
      "Self-directed online learning",
      "The course dove deep into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap",
      "Other topics included database design, scalability, security, user experience, and testing methodologies",
    ],
  },
  {
    id: 2,
    title: "Santa Monica College ",
    subtitle: "Computer Science Major - Some Coursework",
    dateRange: "Sept 2018 - June 2020",
    images: [Scholarship, ScholarshipTwo],
    description:
      "While at Santa Monica College, I majored in Computer Science, earned two scholarships, joined the STEM program, and participated in the computer programming club",
    mainTechnology: ["C", "C++", "HTML"],
    allTechnology: ["C", "C++", "HTML", "Visual Studio Code"],
    descriptionPoints: [
      "Dean’s honor list for 3.76 GPA",
      "STEM Program",
      "Participated in the Programming club as treasurer and promoter",
      "Earned two scholarships: Southern California Edison STEM Scholarship and Robert R. Sprague Foundation Scholarships for STEM",
    ],
  },
];
