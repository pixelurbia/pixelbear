import './css/App.css';
import Comp_Header from './components/Comp_Header.js';
import HomePage from './components/HomePage.js';
import FullAlbums from './components/Comp_Albums.js';
import Portfolio from './components/Comp_portfolio.js';
import BearAdmin from './components/BearAdmin.js';
import Upload from './components/Upload.js';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
   <Router>
      <div>
       <Comp_Header />

        <Switch>

         <Route exact path="/">
            <HomePage />
          </Route> 
          <Route exact path="/Works">
            <Portfolio />
          </Route> 
          <Route exact path="/Albums">
            <FullAlbums />
          </Route>          





        </Switch>
      </div>
    </Router>
   

  );
}

export default App;
