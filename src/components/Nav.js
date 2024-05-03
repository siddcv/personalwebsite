// JavaScript source code
import React from "react";
import { Link } from "react-router-dom";
import '../css/Nav.css';

function Nav() {
                {/*<a href="/about">About</a>*/}
                {/*<button class="subnavbtn">Clients<i class="fa fa-caret-down"></i></button>*/}
                {/*<button class="subnavbtn">Services<i class="fa fa-caret-down"></i></button>*/}
                {/*<a href="https://codepen.io/pec-man" class="expandHome">Contact</a>*/}


    return (
        < nav class="navbar" >
            
            <div id="trapezoid">
                <div class="dropdown">
                    <div id="content" class="text1">
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/experience">Experiences</Link></div>
                        <div><Link to="/projects">My Projects</Link></div>
                        <div><Link to="/contact">Contact Me</Link></div>
                    </div>
                </div>
            </div>

        </nav>
        





    );
}

export default Nav
