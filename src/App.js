import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHome from "./Pages/Home/MainHome";
import ProjectDetails from "./Pages/Portfolio/ProjectDetails";

import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainHome></MainHome>} />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails></ProjectDetails>}
        />
      </Routes>
    </div>
  );
}

export default App;
