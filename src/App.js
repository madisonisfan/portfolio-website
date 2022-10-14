import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import Contact from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <div className="App app-style" style={{}}>
      <Header />
      <div className="flex-row">
        <div
          className="d-flex flex-column"
          style={{
            backgroundColor: "#171629",
            width: "50px",
            paddingBottom: "75%",
            position: "fixed",
          }}
        >
          <i
            className="fa fa-envelope"
            style={{ color: "#8b50e3", fontSize: "28px" }}
          />
          <a
            href="https://www.linkedin.com/in/madison-isfan/"
            style={{ color: "#8b50e3" }}
          >
            <i
              className="fa fa-linkedin"
              style={{ fontSize: "30px", paddingTop: "50px" }}
            />
          </a>
          <a
            href="https://github.com/madisonisfan"
            style={{ color: "#8b50e3" }}
          >
            <i
              className="fa fa-github fa-lg"
              style={{ fontSize: "30px", paddingTop: "50px" }}
            />
          </a>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route
              path="experience/:eventId"
              element={<ExperienceDetailPage />}
            />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
    /*
    <div className="App app-style">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="experience/:eventId" element={<ExperienceDetailPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>*/
  );
}

export default App;

/*
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Routes>*/
