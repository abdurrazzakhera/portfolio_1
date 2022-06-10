import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Navbar from "./Pages/Shared/Navbar";
import Portfolios from "./Pages/Portfolio/Portfolios";
import Contactme from "./Pages/Home/Contactme";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Portfolios></Portfolios>
      <About></About>
      <Contactme></Contactme>
    </div>
  );
}

export default App;
