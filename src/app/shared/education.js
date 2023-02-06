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
    subtitle: "Earned the certificate of honors",
    dateRange: "Feb 2021 - July 2021",
    description:
      "This bootcamp focused on creating dynamic web and mobile apps with the use of React and React Native. In addition, we were taught how to develop and use backend technology.",
    images: [
      Mealplanner_Home,
      Mealplanner_Recipes,
      Mealplanner_AddRecipe,
      Mealplanner_Blog,
    ],
    mainTechnology: [
      "React",
      "React Native",
      "Node.js",
      "Redux",
      "JavaScript",
      "Bootstrap",
    ],
    allTechnology: [
      "React",
      "React Native",
      "Node.js",
      "Redux",
      "JavaScript",
      "Bootstrap",
    ],
    descriptionPoints: [
      "Development of responsive websites using bootstrap framework",
      "Use React to create dynamic web applications. ",
      "Use React Native to build and deploy mobile applications",
      "Learn about and implement backend database operations, user authentication and application logic. ",
    ],
  },

  {
    id: 1,
    title: "Web Programming with Python and JavaScript",
    subtitle: "Earned a certificate",
    dateRange: "Aug 2020 - Jan 2021",
    description:
      "This was my first true experience with web development. During the span of the course, I went from reviewing HTML to learning about various ways to test and security and scaling.",
    images: [HarvardX_Certificate],
    mainTechnology: ["JavaScript", "Python", "SQL", "CSS", "Django"],
    allTechnology: [
      "JavaScript",
      "Python",
      "SQL",
      "Django",
      "CSS",
      "HTML",
      "Visual Studio Code",
    ],
    descriptionPoints: [
      "Self-directed online learning",
      "The course dove deep into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap. Topics include database design, scalability, security, and user experience.",
      "Testing methodologies",
      "Scaling and security ",
    ],
  },
  {
    id: 2,
    title: "Santa Monica College - CS Major",
    subtitle: "STEM Program",
    dateRange: "Sept 2018 - June 2020",
    images: [Scholarship, ScholarshipTwo],
    description:
      "During my time at Santa Monica College, I majored in Computer Science, earned two scholarships, joined the STEM program, and particapted in the computer programming club.",
    mainTechnology: ["C", "C++", "HTML"],
    allTechnology: ["C", "C++", "HTML", "Visual Studio Code"],
    descriptionPoints: [
      "Dean’s honor list",
      "STEM Program",
      "Participated in the Programming club as treasurer and promoter",
      "2 scholarships: Southern California Edison STEM Scholarship and Robert R. Sprague Foundation Scholarships for STEM",
    ],
  },
];
