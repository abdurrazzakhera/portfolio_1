import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Navbar from "./Pages/Shared/Navbar";
import Portfolios from "./Pages/Portfolio/Portfolios";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolios></Portfolios>
    </div>
  );
}

export default App;
