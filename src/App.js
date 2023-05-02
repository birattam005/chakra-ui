import React from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from "./MyComponents/Header";
import Home from './MyComponents/Home';
import Footer from './MyComponents/Footer'
import Videos from './MyComponents/Videos';
import Upload from './MyComponents/Upload';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

