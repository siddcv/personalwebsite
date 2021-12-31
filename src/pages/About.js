// JavaScript source code
import React from "react";
import ImageSlider from "../components/ImageSlider";
import Nav from "../components/Nav";
import '../css/slideshow.css';
import { SliderData } from '../components/SliderDate';



function About() {
    return (
        <div>
            <Nav />
            <ImageSlider slides={SliderData}/>
        </div>
    );
}

export default About;
