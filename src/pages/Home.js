// JavaScript source code
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import '../css/Home.css';
const Home = () => {
    return (
        <div>
            <Nav />
            <Landing />
            
        </div>
        )

}
export default Home
