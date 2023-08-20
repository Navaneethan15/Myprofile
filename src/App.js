import './App.css';
import Navabar from './components/Navbar/Navabar';
import Introo from './components/Intro/Introo';
import Serivces from './components/services/Serivces';
import Experience from './components/Experience/Experience';
import Works from './components/work/Works';
import Portfolio from './components/portfolio/Portfolio';






function App() {
  return (
    <div className="App">
      <Navabar/>
      <Introo/>
      <Serivces/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
