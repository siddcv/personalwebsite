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


function MyExperiences() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (        
        <div>
            <div class="gradient-text">
                <div>Projects</div>
                <div class="summary">
                    A collection of some of the projects that I decided to take up based off of my interests which were great learning experiences</div>
            </div>
            <div class="flexbox_projects">
                <div class="col">
                    <div class="mainbox_projects">
                        <div class="leftbox">
                            <div class="header"> Personal Website</div>
                        This website from scratch having learnt the React framweork over the course of a couple weeks and combined it with my previous knowledge of HTML, CSS and JS
                    It was a great learning experience having to build a live application while also learning React at the same time. It is now hosted on the cloud on AWS using optimized cloud foundations.
                        </div>
                        <div class="rightBox">
                            {/* <div> */}
                            {/* <FaWindowMaximize   style={{ fontSize: '48px' }} /> 
                            <FontAwesomeIcon icon="fa-brands fa-react" /> */}
                            <img class="pics" src={react} />
                            {/* </div> */}
                        </div>
                    </div>
                    <div class="mainbox_projects_image">
                    <div class="leftbox">
                            <div class="header">Glove Piano</div>
                            <div >
                            During my freshmen year of college, for our introductory engineering class as a group project we built a glove piano using an arduino board. By attaching flex sensors to each finger of the glove, the movement of a finger to a certain degree would play a certain note allowing you to play a song from your fingertips.
                        
                            </div>
                    </div>
                    <div class="below_box">
                        <div class="img_box">
                        <img class="proj_pics" src={piano} />
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="mainbox_projects">
                        <div class="leftbox">
                        <div class="header"> Nasdaq Database</div>
                        <div>
                        During the summer of 2020, I grew a strong interest in the stock market and learning about stocks however, I couldn't find a central place that would have all the necessary information for me to make a decision about picking stocks.
                    Therefore I took it upon myself to do that myself. I strengthened my python skills and used webscraping techniques and python data structure to compile a database with all the releveant information about 2830 Nasdaq companies.
                    Further I used pivot tables in Excel to use data visualization to make the data more easily comprehensible.
                
                 The repository can be found at https://github.com/siddcv/NasdaqDataBase

                        </div>

                        </div>
                        <div class="rightBox">
                            {/* <div> */}
                            <img class="pics" src={db} />
                            {/* </div> */}
                        </div>
                    </div>
                    <div class="mainbox_projects">
                        <div class="leftbox">
                        <div class="header">AI/ML Buildathon Cisco Supply Chain</div>
                            <div>
                            Created an ML solution to identify anomalous RMA's orders providing leadership with actionable insights, leveraging ML
                            algorithms such as Isolation Forest, Persist AD, InterQuartileRangeAD trained on a FY23 dataset consisting of 33,198 RMA
                            orders.
                            Finished 2nd place across an AI/ML build-a-thon spanning across Cisco Supply Chain
                            </div>

                        </div>
                        <div class="rightBox">
                            {/* <div> */}
                            <img class="pics" src={ml} />
                            {/* </div> */}
                        </div>
                    </div>
                    <div class="mainbox_projects">
                        <div class="leftbox">
                        <div class="header">Container Migration in Ad-hoc Wireless Mesh Networks</div>
                            <div >
                            aims to implement container migration on an ad hoc mesh network, which would allow for a mobile fog computing mesh network in areas with no connectivity.
                            We use technologies like Docker, CRIU, and batman-adv to create a mesh compute network that is decentralized, flexible, and consistent. 
                            Since this system is aimed to be used in rural areas/areas with no connectivity, power and time considerations were measured and analyzed to ensure reasonable mobile applications were possible.
                            </div>

                        </div>
                        <div class="rightBox">
                            <img class="pics" src={network} />

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