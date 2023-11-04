import './App.css';
import Navabar from './components/Navbar/Navabar';
import Introo from './components/Intro/Introo';
import Serivces from './components/services/Serivces';
import Experience from './components/Experience/Experience';
import Works from './components/work/Works';
import Portfolio from './components/portfolio/Portfolio';
import Testmonial from './components/Testmonial/Testmonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useContext } from "react";
import { themeContext } from "./Context";





function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      backgroundc: darkMode? "black" : "",
      color: darkMode? "white" : ""
    }}
    >

      <Navabar/>
      <Introo/>
      <Serivces/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testmonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
