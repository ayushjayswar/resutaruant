import React from 'react'
import { Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
