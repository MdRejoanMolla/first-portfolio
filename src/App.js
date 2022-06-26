import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Intro from './component/Intro/Intro';
import Navbar from './component/Navbar/Navbar';
import Portfolio from './component/Portfilio/Portfolio';
import Service from './component/Service/Service';
import { themeContext } from './context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{ background: darkMode ? "black" : '', color: darkMode ? "white" : "" }}
      id='home'
    >

      <Navbar></Navbar>
      {/* <Intro></Intro> */}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
