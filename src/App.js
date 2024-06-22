import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Intro } from './Components/Intro';
import { Skills } from './Components/Skills';
import { Experience } from './Components/Experience';
import { Projects } from './Components/Projects';
import { Education } from './Components/Education';

function App() {
  return (
    <div>
     <Navbar/>
      <Intro/>
      <Skills></Skills>
      <Projects/>
      <Education/>
    </div>
  );
}

export default App;
