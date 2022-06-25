import React from 'react'; 
import Home from './components/Content'
import Navbar from './components/Navbar';
import Mobilebar from './components/Mobilebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';



const PageNotFound = () => {
  return <h2>Page not found - Error: 404</h2>
}

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
