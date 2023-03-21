import { Routes, Route } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Modal,
  ModalHeader,
  ModalBody,
  ButtonDropdown,
  Button,
} from "reactstrap";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import ContactColumn from "./components/ContactColumn";
//import Contact from "./pages/ContactPage";
import "./App.css";
import { Icon } from "@iconify/react";

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  const [modalOpen, toggleModal] = useState(false);

  const openEmail = () => {
    console.log(`open email`);

    window.location = "mailto:yourmail@domain.com";
    /*window.open(
      "mailto:isfanmadison@gmail.com?subject=Subject&body=Body%20goes%20here"
    );*/
  };

  return (
    <div className="App app-style" style={{}}>
      <Header />
      <div className="flex-row">
        <ContactColumn />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="experience" element={<ExperiencePage />} />
            <Route
              path="experience/:eventId"
              element={<ExperienceDetailPage />}
  />*/}
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="education" element={<EducationPage />} />
            {/*<Route path="contact" element={<Contact />} />*/}
          </Routes>
        </div>
      </div>
      <div
        style={{
          color: "#8b50e3",
          fontSize: 15,
          paddingBottom: 15,
          flexDirection: "row",
        }}
      >
        Built by Madison Isfan{" "}
        <a
          href="https://github.com/madisonisfan/Portfolio-Website-Simple"
          style={{ color: "#8b50e3" }}
        >
          <i
            className="fa fa-github fa-lg"
            style={{ fontSize: "30px", paddingTop: "50px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default App;

/*
 <div
        style={{
          color: "#8b50e3",
          fontSize: 15,
          paddingBottom: 15,
          flexDirection: "row",
        }}
      >
        Built by Madison Isfan{" "}
        <a
          href="https://github.com/madisonisfan/Portfolio-Website-Simple"
          style={{ color: "#8b50e3" }}
        >
          <i
            className="fa fa-github fa-lg"
            style={{ fontSize: "30px", paddingTop: "50px" }}
          />
        </a>
      </div>

*/

/*

      <ModalHeader className="email-modal-header">
          Send me an email!
        </ModalHeader>
    <div className="App app-style">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="experience/:eventId" element={<ExperienceDetailPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>*/

/*
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Routes>*/
