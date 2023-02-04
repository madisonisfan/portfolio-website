import TestImage from "../assets/images/TrainrAI_Images/TrainrAI_ImageThree.PNG";
import TrainrAI_ImageOne from "../assets/images/TrainrAI_Images/TrainrAI_ImageOne.PNG";
import TrainrAI_ImageTwo from "../assets/images/TrainrAI_Images/TrainrAI_ImageTwo.PNG";
import TrainrAI_ImageThree from "../assets/images/TrainrAI_Images/TrainrAI_ImageThree.PNG";
import MealplannerRN1 from "../assets/Mealplanner-RN/MealplannerRN1.PNG";
import MealplannerRN2 from "../assets/Mealplanner-RN/MealplannerRN2.PNG";
import MealplannerRN3 from "../assets/Mealplanner-RN/MealplannerRN3.PNG";
import MealplannerRN4 from "../assets/Mealplanner-RN/MealplannerRN4.PNG";
import Mealplanner_Home from "../assets/images/Mealplanner-react-honors/home-page.png";
import Mealplanner_Recipes from "../assets/images/Mealplanner-react-honors/recipes-page.png";
import Mealplanner_AddRecipe from "../assets/images/Mealplanner-react-honors/add-recipe-page.png";
import Mealplanner_Blog from "../assets/images/Mealplanner-react-honors/blog-page.png";

export const PROJECTS = [
  {
    id: 0,
    title: "trainrAI",
    subtitle: "Founder & Software Developer",
    description:
      "After particapting in Founder University, I built and then launched trainrAI to a group of testers. trainAI is a iOS app created to help people build healthy habits and improve thier lifestyles. ",
    images: [TrainrAI_ImageOne, TrainrAI_ImageTwo, TrainrAI_ImageThree],
    mainTechnology: ["SwiftUI", "Core Data", "CloudKit"],
    allTechnology: ["SwiftUI", "Core Data", "CloudKit", "GitHub", "Xcode"],
    descriptionPoints: [
      "Created an iOS app in SwiftUI that helps people build healthy habits",
      "Distributed through TestFlight and being used by a small group of beta testers",
      "Users are able to check off daily tasks, add bonus tasks, complete a weekly fitness assessment, view their current “perfect day” streaks and track their fitness progress",
      "Learning and iterating on the app based on user feedback",
      "Participated in Founder University (Jason Calacanis initiative) to kick off the project: goal was to come up with an idea and launch it in 90 days which I was able to achieve",
    ],
    gitHubLink: "",
  },
  {
    id: 1,
    title: "Mealplanner React Native App",
    description:
      "During the React Native portion of Nucamp bootcamp, I created a meal planner app. Recently I decided to recreate this project with my new skills and updated technology. ",
    images: [MealplannerRN1, MealplannerRN2, MealplannerRN3, MealplannerRN4],
    allTechnology: [
      "React Native Elements",
      "Trello",
      "Visual Studio Code",
      "Expo CLI",
      "Expo Go",
      "React Navigation",
      "React Redux",
      "GitHub",
      "Font Awesome",
    ],
    mainTechnology: ["React Native", "Expo", "React Redux"],
    gitHubLink: "",
    descriptionPoints: [
      "For almost my entire life I've had a passion for health and fitness. Like most people, I found it difficult to find healthy foods that I enjoy and to stay consistent with healthy eating. My goal is to create a place for people to go where they can organize their weekly meal plans, and be motivated by the community integrated with the site. To help with finding food options for everyone, I created a feature that allows anyone to add a recipe to the site. With everyone adding recipes, there would be an extensive list of food.",
      "An extra bonus of this app is the blog feature. Integrating a community into the app will encourage users to continue using the app and will help people motivate each other.",
      "Trello is being used to plan features and indicate bugs.",
      "React Redux is used for the apps state management.",
      "Expo Go is used to test the app on my device.",
      "React Navigation is used throughout the app to navigate between screens using Tab and Stack Navigators, and Stack Screens. ",
      "React Native Elements are used on every screen to access various components such as Icons and Buttons.",
    ],
  },

  {
    id: 2,
    title: "Recreating iOS Calculator",
    description:
      "I recreated Apple’s iOS calculator with SwiftUI that includes styling and functionality. This was just a fun project to do and it was a great way to grow my skills. I plan to continue this project and expand its capabilities.  ",
    images: [TestImage, TestImage],
    gitHubLink: "",
    //youtubelink
    mainTechnology: ["Swift", "SwiftUI"],
    allTechnology: ["Swift", "SwiftUI", "Xcode"],
    mainTechnology: ["Swift", "SwiftUI"],
    descriptionPoints: [
      "On YouTube I posted a two part tutorial for this project.",
      "The first step was to style. Given that I was using SwiftUI, it was pretty easy to retrieve the correct colors and icon.",
      "The second step was functionality. By the end, the app was fully capable of completing any operations it was asked to do. ",
    ],
  },
  {
    id: 3,
    title: "Mealplanner React Web App",
    description:
      "In the React portion of the Nucamp, I created a meal planner website. This was my first web app I created and first time working with React independently. ",
    images: [
      Mealplanner_Home,
      Mealplanner_Recipes,
      Mealplanner_AddRecipe,
      Mealplanner_Blog,
    ],
    gitHubLink: "",
    mainTechnology: ["React", "Reactstrap", "Redux"],
    allTechnology: [
      "React",
      "Reactstrap",
      "Redux",
      " Redux Logger",
      "Redux Thunk",
      "React Popper",
      "Font Awesome",
    ],
    descriptionPoints: [
      "This was my first time building a React app independently.",
      "Inspiration: For almost my entire life I've had a passion for health and fitness. Like most people, I found it difficult to find healthy foods that I enjoy and to stay consistent with healthy eating. My goal is to create a place for people to go where they can organize their weekly meal plans, and be motivated by the community integrated with the site. To help with finding food options for everyone, I created a feature that allows anyone to add a recipe to the site. With everyone adding recipes, there would be an extensive list of food.",
    ],
  },
];
