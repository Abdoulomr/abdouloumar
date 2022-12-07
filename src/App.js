import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/myprojects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Loader from "./components/loader/Loader";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  document.title = "Abdoul Oumar SY";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
