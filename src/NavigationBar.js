import { Link } from 'react-router-dom';
import './NavigationBar.css'


function NavigationBar(){
    return(
        <nav className="navbar">
          <div className="logo">
            <h2>Welcome</h2>
          </div>
          <div className="menu">
            <div className="menu-links">
              <i className="fa-solid fa-house" id='homeicon'></i><Link to="/"><p>HOME</p></Link>
              <i className="fa-solid fa-address-card" id='abouticon'></i><Link to="/about" ><p>ABOUT</p></Link>
              <i className="fas fa-cogs" id='skillicon'></i><Link to="/Skills"><p>Skills</p></Link>
              <i className="fa-solid fa-address-book" id='contacticon'></i><Link to="/contact"><p >CONTACT</p></Link>
            </div>
          </div>
          
          <div className="menu-button">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
    );
};

export default NavigationBar;