import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MyProjects from "./pages/MyProjects"

import { Route, Link } from "react-router-dom";
import Experience from "./pages/Experience";


function App() {
    return (
        <div>
            {/*<Home />*/}
            {/*<About />*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={MyProjects} />
            <Route exact path="/experience" component={Experience} />
            {/* <Route exact path="/contactMe" component={Experience} /> */}

        </div>

        )
}


//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
