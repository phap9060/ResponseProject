
import './App.css'
import React, { Fragment, useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './routes'



const App = () => {


  return (
    <Router>

    < div className="App" >
      <Routes/>
    </div >
    </Router>


  )
}




export default App;
