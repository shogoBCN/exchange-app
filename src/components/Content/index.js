import React, {useState} from 'react'
import Mobilebar from '../Mobilebar'
import Navbar from '../Navbar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Mobilebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  )
}

export default Home