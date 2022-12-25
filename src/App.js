import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/myprojects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { Fragment } from "react";

function App() {
  return (
    <Fragment className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
