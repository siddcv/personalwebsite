// JavaScript source code
//website
//todo list
//nasdaq database
//glove piano
//aiml buildathon
//senior design
//classroute
import React from "react";
import '../css/Experience.css';
import intern from '../images/intern.jpg'
import tour from '../images/tour.jpg'
import niners from '../images/49ers.jpg'
import etc from '../images/ETC.png'
import csu from '../images/csu.png'
import work from '../images/work.png'
import react from '../images/react.png'
import db from '../images/db.png'
import ml from '../images/ml.png'
import nlp from '../images/nlp.png'
import network from '../images/network.png'
import { useEffect } from 'react';
import { FaWindowMaximize   } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import piano from '../images/Piano.JPG'
import todo from '../images/dolist.mp4'
import cvnum from '../images/0924.mp4'


function MyExperiences() {

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.arrowdown1').forEach(function(element) {
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


    document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener("DOMContentLoaded", function() {
            var element = document.getElementById("text-item");
            var text = element.innerHTML;
            var newText = `<span class="highlight">${text}</span>`;
            element.innerHTML = newText;
        });
    });



    useEffect(() => {
        document.querySelectorAll('.arrowdown1').forEach(function(wl) {
            wl.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                const targetId = this.getAttribute('href').substring(1); // Get the target ID
                const targetElement = document.getElementById(targetId); // Find the target element
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 60;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    //targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
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
            <div class="gradient-text">
                <div>Projects</div>
                <div class="summary">
                    A collection of some of the projects that I decided to take up based off of my interests which were great learning experiences</div>
                <div class="arrowd1"><a href="#secondsection1" class="arrowdown1"></a></div>
            </div>
            <div id="secondsection1" class="flexbox_projects">
                <div class="col">
                    <div class="mainbox_projects">
                        <div class="leftbox">
                            <div class="header"> Personal Website</div>
                            <div>
                        This website was built from scratch having learnt the <span id ='text-item' class='highlight'>React framework</span> and combined it with my previous knowledge of <span id ='text-item' class='highlight'>HTML, CSS and JS</span>
                        This website is fully <span id ='text-item' class='highlight'>responsive and compatible with mobile screens</span>. I additionally combined it with the skills used from my AWS Cloud Practioner certification to have it
                        now <span id ='text-item' class='highlight'>hosted on the cloud on AWS</span> using optimized cloud foundations such as<span id ='text-item' class='highlight'> Route 53, S3 storage, Certificate Manager and CloudFront.</span>
                    </div>
                        </div>
                        <div class="rightBox">
                            {/* <div> */}
                            {/* <FaWindowMaximize   style={{ fontSize: '48px' }} /> 
                            <FontAwesomeIcon icon="fa-brands fa-react" /> */}
                            <img class="pi" src={react} />
                            {/* </div> */}
                        </div>
                    </div>
                    <div class="mainbox_projects">
                        <div class="leftbox">
                        <div class="header">AI/ML Buildathon Cisco Supply Chain</div>
                            <div>
                            Created an ML solution to <span id ='text-item' class='highlight'>identify anomalous quantities in return orders</span> providing leadership with actionable insights, leveraging ML
                            algorithms such as <span id ='text-item' class='highlight'>Isolation Forest, Persist AD, InterQuartileRangeAD </span>trained on a FY23 dataset consisting of 33,198 RMA
                            orders.
                            <span id ='text-item' class='highlight'>Finished 2nd place</span> across an AI/ML build-a-thon spanning across Cisco Supply Chain
                            </div>

                        </div>
                        <div class="rightBox">
                            {/* <div> */}
                            <img class="pi" src={ml} />
                            {/* </div> */}
                        </div>
                    </div>

                    <div class="mainbox_projects">
                        <div class="leftbox">
                        <div class="header" id ='text-item'> Nasdaq Database</div>
                        <div>
                        During the summer of 2020, I grew a strong interest in the stock market and learning about stocks however, I couldn't find a central place that would have all the necessary information for me to make a decision about picking stocks.
                    Therefore I took it upon myself to do that myself. I strengthened my <span id ='text-item' class='highlight'>python skills </span>and used <span id ='text-item' class='highlight'>webscraping techniques</span> and <span id ='text-item' class='highlight'>python data structures</span> to compile a database with all the releveant information all the <span id ='text-item' class='highlight'> 2830 Nasdaq companies.</span>
                    Further I used pivot tables in Excel to use <span id ='text-item' class='highlight'>data visualization </span>to make the data more easily comprehensible.

                        </div>

                        </div>
                        <div class="rightBox">

                            <img class="pi" src={db} />
                        </div>
                    </div>
                    

                    <div class="mainbox_projects">
                        <div class="leftbox">
                        <div class="header">Container Migration in Ad-hoc Wireless Mesh Networks</div>
                            <div >
                            We aimed to implement<span id ='text-item' class='highlight'> container migration on an ad hoc mesh network</span>, which would allow for a mobile fog computing mesh network in areas with no connectivity.
                            We used technologies like <span id ='text-item' class='highlight'>Docker, CRIU, and batman-adv</span> to create a mesh compute network that is decentralized, flexible, and consistent. 
                            Since this system is aimed to be used in rural areas/areas with no connectivity, power and time considerations were measured and analyzed to ensure reasonable mobile applications were possible.
                            </div>

                        </div>
                        <div class="rightBox">
                            <img class="pi" src={network} />

                        </div>
                    </div>
                </div>

                <div class="col">

                <div class="mainbox_projects_image">
                    <div class="leftbox">
                            <div class="header">Handwritten Digit Classifier</div>
                            <div >
                                With my interest in computer vision I learnt the foundations of <span id ='text-item' class='highlight'>neural networks and designed a multi layer architecture</span> to be able to identify given digits upto a<span id ='text-item' class='highlight'>96% accuracy.</span> I tried a variety of combinations of architecture choices, including varying hyperparameters and number of layers to help develop the most accurate model. I was able to achieve this by using the <span id ='text-item' class='highlight'>TensorFlow framework.</span>
                                Please expand the video below to see the demo.
                            </div>
                    </div>
                    <div class="img_box">
                            <video width="640" height="360" controls muted>
                            <source src={cvnum} type="video/mp4"/>
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div class="mainbox_projects_image">
                    <div class="leftbox">
                            <div class="header">To Do List</div>
                            <div >
                            For a class project I built To Do List for college students to use to keep track of assignments and due dates.
                            it was a <span id ='text-item' class='highlight'>persistent multi-page application</span> which connects to a <span id ='text-item' class='highlight'>Mongo database</span> and stores and displays data using features of <span id ='text-item' class='highlight'>CRUD. </span>
                            Assignments could be searched up by class, with all the assignments for the class listed below.
                        
                            </div>
                    </div>
                    <div class="below_box">
                        <div class="img_box">
                            <video width="640" height="360" controls muted>
                            <source src={todo} type="video/mp4"/>
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    </div>
                    <div class="mainbox_projects_image">
                    <div class="leftbox">
                            <div class="header">Glove Piano</div>
                            <div >
                            During my freshmen year of college, for our introductory engineering class as a group project we built a glove piano using an<span id ='text-item' class='highlight'> arduino board</span>. By attaching flex sensors to each finger of the glove, the movement of a finger to a certain degree would play a certain note allowing you to play a song from your fingertips.
                        
                            </div>
                    </div>
                    <div class="below_box">
                        <div class="img_box">
                        <img class="proj_pics" src={piano} />
                        </div>
                    </div>
                    </div>





                </div>

                {/* <div class="col">
                    <div class="mainbox_projects">
                        <div class="leftbox">

                        </div>
                        <div class="rightBox">
                            <img class="pics" src={nlp} />
                        </div>
                    </div>
                    <div class="mainbox_projects">
                    <div class="leftbox">
                            <div class="company">Cisco ETC-San Jose</div>
                            <div class="role">Data & Analytics Lead</div>
                            <div class="text">
                            Over the course of the past 2 years, I have served as a tour guide for the school of engineering here at SCU, guiding prospective high school students through the college application process.
                        It was a challenge at first as the idea of talking in front of 20+ people pitching my university while also trying my best to not fall down while walking backwards was daunting, however over time I was able to confidently lead tours.
                        This was an interesting experience as for the first year we had to lead virtual tours online due to the pandemic which required us to have to learn a whole new set of skills.
                        During my senior year here at SCU, I have served as a peer advisor helping 30 freshmen in the school of engineering by guiding them through their first year and being there point of contact fo any issues/questions.
                        It has required me to learn to manage my time better as I was responsible for leading 30 students and communicating relevant information to ensure they reach certain milestones by specific timelines.         
                            </div>
                    </div>
                    <div class="rightBox">
                        <div>
                        <img class="pics" src={etc} />
                        </div>
                    </div>
                    </div>
                </div> */}
                
               
            </div>

        </div>
        
        );

}
export default MyExperiences