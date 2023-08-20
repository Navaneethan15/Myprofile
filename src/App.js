import './App.css';
import Navabar from './components/Navbar/Navabar';
import Introo from './components/Intro/Introo';
import Serivces from './components/services/Serivces';
import Experience from './components/Experience/Experience';
import Works from './components/work/Works';






function App() {
  return (
    <div className="App">
      <Navabar/>
      <Introo/>
      <Serivces/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
