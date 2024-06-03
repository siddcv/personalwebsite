import React from "react";
import { useEffect } from 'react';
import '../css/Home.css';
import profile from '../images/Profile1.jpg'
import { SliderData } from '../components/SliderDate';
import ImageSlider from "../components/ImageSlider";
import '../css/slideshow.css';
import { useHistory } from 'react-router-dom';



function Landing() {

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.arrowdown').forEach(function(element) {
            element.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                const targetId = this.getAttribute('href').substring(1); // Get the target ID
                const targetElement = document.getElementById(targetId); // Find the target element
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
                }
                return false; // Prevent further propagation of the event
            });
        });
    });

    useEffect(() => {
        document.querySelectorAll('.arrowdown').forEach(function(wl) {
            wl.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                const targetId = this.getAttribute('href').substring(1); // Get the target ID
                const targetElement = document.getElementById(targetId); // Find the target element
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
                }
                return false; // Prevent further propagation of the event
            });
        });

    },[])

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    

    return (
        <div>
            <div class="firstsection">
                <div class="flex-container">
                    <div class="first">
                        <div class="name" >Hi I'm Sidd!</div>
                        <h4>Welcome to my website</h4>
                    </div>
                    <img class="mypic" src={profile} />
                </div>
                {/*    <a href="#secondsection" class="down-arrow"></a>*/}
                {/*    <p><i class="arrow down"></i></p>*/}
                {/* <a href="#secondsection" class="scrolldown">Scroll Down</a> */}
               <div class="arrowd"><a href="#secondsection" class="arrowdown"></a></div>
            </div>
            <div id="secondsection">
                <div class="flexcontainer">
                    <div class='first-col'>
                        <ImageSlider slides={SliderData} />
                    </div>
                    <div class='first-col' id='description'>
                        <div class='abt'>
                        <h1 class='abtme'> About Me: </h1>
                        <p class='me'>
                            I'm  <span class='color'> curious and passionate </span> about solving new problems and value <span class='color'>building strong interpersonal relationships</span> due to my transnational experiences.
                            I love finding unique solutions to challenges while <span class='color'>expanding my learning horizon </span> and strengthening my expertise in the computational field.
                        </p>
                        <p class='me'>
                            I'm a <span class='color'>Software Engineer II</span> at Cisco Systems working on developing the backend systems which supports Cisco's Supply Chains' transformation to the cloud.
                            At Santa Clara University I majored in <span class='color'>Computer Science and Engineering</span> with a minor in Mathematics.
                        </p>
                        </div>
                        {/* <p>
                            I'm a Software Engineer II at Cisco Systems working on developing the backend systems which supports Cisco's Supply Chains' transformation to the cloud.
                            At Santa Clara University I majored in Computer Science and Engineering with a minor in Mathematics.
                            Additionally, I was involved in the engineering community at SCU serving as a peer advisor and tour guide. 
                        </p>
                        <p>
                            Outside of school I'm a huge Bay Area sports fan and love playing basketball, golf and running as well as watching 49ers football in my spare time.
                            Furthermore I'm an avid podcast listener, stand up comedy enthusiast and would love to hear recommendations.
                        </p> */}
                    </div>
                </div>
                {/*<div class="arrowu"><a class="arrowup"></a></div>*/}
                {/*<p class="scrollup">Scroll Up</p>*/}


            </div>
        </div>

    );
}

export default Landing
