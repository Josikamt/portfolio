import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = true;
  return (
    <div
      className="App"
      style={{
        background: "#242D49",
        color:"white",
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
