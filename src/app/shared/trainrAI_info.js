import LoadingScreen from "../assets/images/TrainrAI-phone/loading-screen.png";
import NightTasks from "../assets/images/TrainrAI-phone/night-tasks.png";
import ProgressScreen from "../assets/images/TrainrAI-phone/progress.png";
import Checklist from "../assets/images/TrainrAI-phone/tasks.png";
import Assessment from "../assets/images/TrainrAI-phone/weekly-assessment.png";

export const TRAINRAI_POINTS = [
  {
    id: 0,
    title: "Summary",
    textPoints: [
      "I applied for and was accepted into Founder University, a 12-week startup course and challenge. I created an Apple Watch, and iPhone App called 90PerfectDays to help people build healthy habits through challenges and streaks and launched it on time. This was my first mobile app!",
      "I learned about startups, MVPs, SwiftUI, Xcode, iCloud, testing, and other useful tools like Trello and built and tested the entire system from the ground up. I launched the app to a group of 50 Beta Testers through Testflight before the end of the program. I also gathered valuable feedback, which I folded into new releases of the app.",
    ],
    text: "I applied for and was accepted into Founder University, a 12-week startup course and challenge. I created an Apple Watch and iPhone App called 90PerfectDays to help people build healthy habits through challenges and streaks and launched it on time. This was my first mobile app!I learned about startups, MVPs, SwiftUI, Xcode, iCloud, testing and other useful tools like Trello and built and tested the entire system from the ground up. I launched the app to a group of 50 Beta Testers through Testflight before the end of the program and gathered valuable feedback which I folded into new releases of the app.",
    image: LoadingScreen,
  },
  {
    id: 1,
    title: "The Problem",
    textPoints: [
      "People struggle to build and stick with healthy habits. I built 90PerfectDays as a challenge app that requires participants to perform a short list of tasks every day for 90 days. As they complete all tasks each day, the streak counter increments and encourages them to continue to hit their goal. They can even do extra tasks that earn them bonus points they can trade in for a cheat day. I used them a lot!",
    ],
    text: "People struggle to build and stick with healthy habits. I built 90PerfectDays as a challenge app that requires participants to perform a short list of tasks every day for 90 days. As they complete all tasks every day, the streak counter increments and encourages them to continue to hit their goal. They can even do extra tasks which earns them bonus points they can trade in for a cheat day. I used them a lot!",
    image: Assessment,
  },
  {
    id: 2,
    title: "The Approach and Technology",
    textPoints: [
      "Given the tight timeline, my initial goal was to build a very simple health assessment Apple Watch app. I chose SwiftUI since that native approach seemed to be the most expedient. I read many articles and watched lots of videos to learn. I created the Apple Watch in a few weeks. After doing so, I decided to expand to a full iPhone app with challenges and streaks, given the initial success.",
      "I partnered with a graphic designer who designed the UI, and I implemented and tested the app. I ultimately tied the app to iCloud to ensure the user data didn’t get lost if the app crashed or if they changed devices. I used Testflight to launch the app to about 50 testers in North America and Europe.",
    ],
    text: "empty text",
    image: Checklist,
  },
  {
    id: 3,
    title: "The Result",
    textPoints: [
      "My real goal was to learn to design, build, test, and launch an app from scratch. I worked extremely hard to learn while building. This resulted in some errors along the way, leading me to refactor the architecture post-launch to make the app more robust and efficient. While creating this app, I had a lot of fun, and I was able to help myself and the people around me build healthy habits.",
      "I continue to work on this app and other health-oriented projects using various technologies like React and React Native. I plan to publish some tutorials to help other developers learn about the aspects of SwiftUI and app development I wish I had known when I started.",
    ],
    text: "empty text",
    image: ProgressScreen,
  },
];
