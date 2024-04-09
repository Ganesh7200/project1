//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Main from './Main';
import Skill from './Skills';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <Router>
      <div>
          <NavigationBar />
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/about"   element={<About/>}/>
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/Skills" element={<Skill/>}/>
                </Routes>
            </div>

    </Router>
    
  );
}

export default App;
