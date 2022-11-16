import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/myprojects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  document.title = 'Abdoul Oumar SY';

  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  return (
      <div className="App">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
