import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import $ from 'jquery';
import reportWebVitals from './reportWebVitals';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
     <Router>
    		<App />
  	 </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


