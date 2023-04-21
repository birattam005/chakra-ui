import React from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from "./MyComponents/Header";
import Home from './MyComponents/Home';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

