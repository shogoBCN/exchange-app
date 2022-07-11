import React from 'react'; 
import Home from './components/Content'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
