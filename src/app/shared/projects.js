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
      "After particapting in Founder University, I built and then launched trainrAI to a group of testers. trainAI is a iOS app created to help people build healthy habits and improve thier lifestyles. ",
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
      "Distributed through TestFlight and being used by a small group of beta testers.",
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
      "During the React Native portion of the Nucamp bootcamp, I created a meal planner app. Recently I recreated this project with my new skills and updated technology. ",
    images: [MealplannerRN1, MealplannerRN2, MealplannerRN3, MealplannerRN4],
    allTechnology: ["Expo", "React Redux", "GitHub", "Font Awesome"],
    mainTechnology: ["React Native", "Expo", "React Redux"],
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
    id: 2,
    title: "Recreating iOS Calculator",
    subtitle: "",
    description:
      "I recreated Apple’s iOS calculator with SwiftUI, which includes styling and functionality. This app was just a fun project to do, and it was a great way to grow my skills. I plan to continue this project and expand its capabilities.",
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
    id: 3,
    title: "Mealplanner React Web App",
    subtitle: "",
    description:
      "I created a meal planner website in the React portion of the Nucamp. This web app was my first independent React project. ",
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
