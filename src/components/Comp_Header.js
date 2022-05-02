import Img from 'react-optimized-image';
import '../css/App.css';
import logo from '../img/logo-light.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useEffect, useState } from "react";


function Comp_Header(props) {




 const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };




  return (

      <header className="header">
      	<img className="logo" src={logo} />

       <div className={`menu-btn ${isActive ? 'open': null}`} onClick={toggleClass}>
        <div className="menu-btn__burger"   ></div>
      </div>

        <ul className={`navigation ${isActive ? 'open': null}`}>
            <li><Link onClick={toggleClass} to="/">Home</Link></li>
            <li><Link onClick={toggleClass} to="/works">My Work</Link></li>
            <li><Link onClick={toggleClass} to="/resume">Resume</Link></li>
            <li><Link onClick={toggleClass} to="/process">My Process</Link></li>
            <li><Link onClick={toggleClass} to="/albums">Albums</Link></li>
        </ul>
        <div className={`fullbg fade-in ${isActive ? 'open': null}`}></div>

      </header>
  );
}

export default Comp_Header;
