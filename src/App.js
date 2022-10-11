import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import "./App.css";

function App() {
  return (
    <div className="App app-style">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="experience/:eventId" element={<ExperienceDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

/*
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Routes>*/
