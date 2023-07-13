import TestImage from "../assets/images/TrainrAI_Images/TrainrAI_ImageThree.PNG";
import TrainrAI_ImageOne from "../assets/images/TrainrAI_Images/TrainrAI_ImageOne.PNG";
import TrainrAI_ImageTwo from "../assets/images/TrainrAI_Images/TrainrAI_ImageTwo.PNG";
import TrainrAI_ImageThree from "../assets/images/TrainrAI_Images/TrainrAI_ImageThree.PNG";
import MealplannerRN_Home from "../assets/Mealplanner-RN/MealplannerRN_Home.PNG";
import MealplannerRN_Blog from "../assets/Mealplanner-RN/MealplannerRN_Blog.jpg";
import MealplannerRN_Favorites from "../assets/Mealplanner-RN/MealplannerRN_Favorites.PNG";
import MealplannerRN_Mealplan from "../assets/Mealplanner-RN/MealplannerRN_Mealplan.PNG";
//import MealplannerRN4 from "../assets/Mealplanner-RN/MealplannerRN4.PNG";
import Mealplanner_Home from "../assets/images/Mealplanner-react-honors/home-page.png";
import Mealplanner_Recipes from "../assets/images/Mealplanner-react-honors/recipes-page.png";
import Mealplanner_AddRecipe from "../assets/images/Mealplanner-react-honors/add-recipe-page.png";
import Mealplanner_Blog from "../assets/images/Mealplanner-react-honors/blog-page.png";
import TrainrAI_LoadingScreen from "../assets/images/TrainrAI-phone/loading-screen.png";
import TrainrAI_NightTasks from "../assets/images/TrainrAI-phone/night-tasks.png";
import TrainrAI_ProgressScreen from "../assets/images/TrainrAI-phone/progress.png";
import TrainrAI_Checklist from "../assets/images/TrainrAI-phone/tasks.png";
import TrainrAI_Assessment from "../assets/images/TrainrAI-phone/weekly-assessment.png";
import CalculatorSC from "../assets/images/CalculatorSC.png";

export const PROJECTS = [
  {
    id: 0,
    title: "trainrAI",
    subtitle: "Founder & Software Developer",
    description:
      "Following my participation in Founder University, I successfully built and launched trainrAI—an iOS app designed to assist individuals in cultivating healthy habits and enhancing their lifestyles. After thorough development and testing, the app is now available on the App Store",
    images: [
      TrainrAI_Checklist,
      TrainrAI_NightTasks,
      TrainrAI_ProgressScreen,
      TrainrAI_Assessment,
      TrainrAI_LoadingScreen,
    ],
    mainTechnology: ["SwiftUI", "Core Data", "CloudKit"],
    allTechnology: ["SwiftUI", "Core Data", "CloudKit", "GitHub", "Xcode"],
    descriptionPoints: [
      "Created an iOS app in SwiftUI that helps people build healthy habits.",
      "Now on the App Store! Previously distributed through TestFlight and was being used by a small group of beta testers.",
      "Users are able to check off daily tasks, add bonus tasks, complete a weekly fitness assessment, view their current “perfect day” streaks and track their fitness progress.",
      "Learning and iterating on the app based on user feedback.",
      "Trello is being used to organize development. ",
      "Participated in Founder University (Jason Calacanis initiative) to kick off the project: goal was to come up with an idea and launch it in 90 days which I was able to achieve. ",
    ],
    gitHubLink: "",
  },

  {
    id: 1,
    title: "Mealplanner React Native App",
    subtitle: "",
    description:
      "During my participation in the React Native portion of the Nucamp bootcamp, I successfully developed a meal planner app. Building upon my newfound skills and utilizing updated technologies, I recently recreated this project to further enhance its functionality and user experience",
    images: [],
    allTechnology: [
      "JavaScript",
      "React Native",
      "Expo",
      "React Redux",
      "GitHub",
      "Font Awesome",
    ],
    mainTechnology: ["JavaScript", "React Native", "Expo", "React Redux"],
    gitHubLink: "",
    descriptionPoints: [
      "My goal is to create a place for people to go where they can organize their weekly meal plans and be motivated by the community integrated with the site. ",
      "Users can sift through an extensive list of recipes and contribute their own recipes to the app. ",
      "Trello is being used to organize development. ",
      "Redux is used to manage the application's state. ",
      "Expo Go is used to test the app on my device. ",
      "React Navigation is used throughout the app to navigate between screens.",
      "React Native Elements are used on every screen to access components such as Icons and Buttons.",
    ],
    gitHubLink: "https://github.com/madisonisfan/mealplanner-RN-2022",
  },

  {
    id: 3,
    title: "Recreating iOS Calculator",
    subtitle: "",
    description:
      "I took on the exciting challenge of recreating Apple's iOS calculator using SwiftUI, incorporating both its styling and functionality. As an exciting addition, I also created a comprehensive two-part tutorial series on YouTube",
    images: [CalculatorSC],
    gitHubLink: "",
    //youtubelink
    mainTechnology: ["Swift", "SwiftUI"],
    allTechnology: ["Swift", "SwiftUI", "Xcode"],
    mainTechnology: ["Swift", "SwiftUI"],
    descriptionPoints: [
      "On YouTube, I posted a two-part tutorial for this project.",
      "The first step was to style. Since I was using SwiftUI, retrieving the correct colors and icons was easy. ",
      "The second step was functionality. By the end, the app could complete any operations it was asked to do. ",
    ],
    gitHubLink: "https://github.com/madisonisfan/Basic-Calculator-",
  },
  {
    id: 4,
    title: "Mealplanner React Web App",
    subtitle: "",
    description:
      "During the React portion of the Nucamp bootcamp, I took on the exciting challenge of creating a meal planner website. This project marked my first independent endeavor in React development",
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
      "Redux Thunk",
      "Font Awesome",
    ],
    descriptionPoints: [
      "This web app was my first time building a React app independently. ",
      "My goal is to create a place for people to go where they can organize their weekly meal plans and be motivated by the community integrated with the site. ",
      "Users can sift through an extensive list of recipes and contribute their own recipes to the app. ",
      "Redux is used to manage the application's state. ",
    ],
    gitHubLink: "https://github.com/madisonisfan/mealplanner-react",
  },
];
