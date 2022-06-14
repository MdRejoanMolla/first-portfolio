import { useContext } from 'react';
import './App.css';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Intro from './component/Intro/Intro';
import Navbar from './component/Navbar/Navbar';
import Portfolio from './component/Portfilio/Portfolio';
import { themeContext } from './context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{ background: darkMode ? "black" : '', color: darkMode ? "white" : "" }}
    >

      <Navbar></Navbar>
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
