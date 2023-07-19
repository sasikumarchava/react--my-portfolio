import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sl from "./components/Sl";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Sl/> 
   </div>
  );
}

export default App;
