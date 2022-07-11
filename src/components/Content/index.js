import React, {useState} from 'react'
import Mobilebar from '../Mobilebar'
import Navbar from '../Navbar'
import CurrList from '../CurrList';
import CurrEx from '../CurrEx'
import Footer from '../Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const PageNotFound = () => {
    return <h2>Page not found - Error: 404</h2>
  }
  
  return (
    <>
      <Mobilebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={CurrEx} />
        <Route path="/currEx" exact component={CurrEx} />
        <Route path="/currList" exact component={CurrList} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer/>
    </>
  )
}

export default Home