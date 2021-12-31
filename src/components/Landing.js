import React from "react";
import '../css/Home.css';
import profile from '../images/Profile1.jpg'
import { SliderData } from '../components/SliderDate';
import ImageSlider from "../components/ImageSlider";
import '../css/slideshow.css';



function Landing() {
    return (
        <div>
            <div id="firstsection">
                <div class="flex-container">
                    <div class="first">
                        <h1>Hi I'm Sidd</h1>
                        <h4>Welcome to my website</h4>
                    </div>
                    <img class="mypic" src={profile} />
                </div>
                {/*    <a href="#secondsection" class="down-arrow"></a>*/}
                {/*    <p><i class="arrow down"></i></p>*/}
                <p class="scrolldown">Scroll Down</p>
            {/*    <div class="arrowd"><a class="arrowdown"></a></div>*/}
            </div>
            <div id="secondsection">
                <div class="flexcontainer">
                    <div class='first-col'>
                        <ImageSlider slides={SliderData} />
                    </div>
                    <div class='second-col'>
                        <h1> About me: </h1>
                        <p>
                            I'm passionate about problem solving and am driven by curiosity and building strong interpersonal relationships.
                            I love finding unique solutions to challenges while expanding my learning horizon and strenghtening my expertise in various fields.
                        </p>
                        <p>
                            Currently I'm a senior at Santa Clara University majoring in Computer Science and Engineering with a minor in Mathematics.
                            Additionally, I am heavily involved in the engineering community at SCU serving as a peer advisor and tour guide. 
                        </p>
                        <p>
                            Outside of school I'm a huge Bay Area sports fan and love playing basketball and watching 49ers football in my spare time.
                            Furthermore I'm an avid podcast listener and stand up comedy enthusiast and would love to hear recommendations.
                        </p>
                    </div>
                </div>
                {/*<div class="arrowu"><a class="arrowup"></a></div>*/}
                {/*<p class="scrollup">Scroll Up</p>*/}


            </div>
        </div>

    );
}

export default Landing
