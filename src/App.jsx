import "./App.css";
import { Link, Element } from "react-scroll";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-dark app">
      <div className="cursor"></div>
      <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand navigation"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="nav-link "
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Element name="home" className="section">
        <Intro />
      </Element>
      <Element name="skills" className="section">
        <Skills />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>

      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
