import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/myprojects/Projects';

function App() {
  document.title = 'Abdoul Oumar SY';

  return (
      <div className="App">
        <Hero />
        <About /> <br />
        <Projects />
      </div>
  );
}

export default App;
