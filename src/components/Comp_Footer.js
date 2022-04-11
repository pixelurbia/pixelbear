import '../css/Comp_Header.css';
import logo from '../img/logo-light.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Comp_Header() {
  return (

      <header className="header">
      	<img className="logo" src={logo} />
        	<ul className="navigation">
          	<li><Link to="/">Home</Link></li>
          	<li><Link to="/Who">Who I am</Link></li>
          	<li><Link to="/albums">Albums</Link></li>
        </ul>
      </header>
  );
}

export default Comp_Header;
