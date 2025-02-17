import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fields from "./pages/Fields";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UrbanPlanning from "./pages/Fields/UrbanPlanning";
import ProjectDetailPage from "./pages/Projects/ProjectDetailPage";
import Qualitives from "./pages/Fields/Qualitives";
import DevlopmentDesign from "./pages/Fields/DevlopmentDesign";
import EngineeringManagement from "./pages/Fields/EngineeringManagement";

import "./App.css";

function App() {
  return (
    <div className="h-screen bg-accent">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fields" element={<Fields />} />
          {/* Dropdown */}
          <Route path="/fields/UrbanPlanning" element={<UrbanPlanning />} />
          <Route path="/fields/Qualitives" element={<Qualitives />} />
          <Route path="/fields/DevlopmentDesign" element={<DevlopmentDesign />} />
          <Route path="/fields/EngineeringManagement" element={<EngineeringManagement />} />
          {/* <Route path="/fields/finance" element={<FinancePage />} /> */}


          {/*  */}
          <Route path="/projects" element={<Projects />} />
          // Project Detail Page
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
