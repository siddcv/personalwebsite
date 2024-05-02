// JavaScript source code
import React from "react";
import '../css/Experience.css';
import intern from '../images/intern.jpg'
import tour from '../images/tour.jpg'
import niners from '../images/49ers.jpg'
import etc from '../images/ETC.png'
import csu from '../images/csu.png'
import work from '../images/work.png'
import { useEffect } from 'react';

function MyExperiences() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        
        <div>
            {/* <div class="top"> */}
            <div class="gradient-text">
                <div>Work and Leadership Experiences</div>
                <div class="summary">
                    A quick summary of some of the exciting opportunities I've had, including pictures of amazing people with whom I've worked alongside
                </div>
                
            </div>
            {/* <div class="arrowd"><a href="#secondsection" class="arrowdown"></a></div> */}
            {/* </div> */}
            <div class="flexy1">
                <div class="picy">
                    <img class="pics" src={work} />
                </div>
                <div class="descy">
                <div class="company">Cisco Systems</div>
                        <div class="role">Software Engineer II</div>
                        <div class="text">
                        Starting my career at Cisco was an amazing opportunity, especially having to take over a senior engineers' responsibilities 
                            as they went on extended leave really challenged me and allowed me to push myself to perform the following:
                            <ul>
                                <li>Managed 3 of 11 SpringBoot Java apps, overseeing maintenance and leading development based on new business
                                    requirements. Ensured SCA/SAST security compliance, Junit requirements, facilitated Kafka messaging, and supported Kubernetes containerization</li>
                                <li>Designed and showcased a proof of concept to integrate a Java application with CyberArk Conjur via REST APIs for improved
                                    security. Implemented modifications across all 11 applications, ensuring full operation with the Conjur security platform</li>
                                <li>Built an in-house tool utilizing Angular's framework to replace Trinamix's Fabconnect tool. It served as a Platform as a Service
                                    (PaaS) addition to Oracle Cloud Manufacturing
                                </li>
                                <li>Responsible for applications that handled every order passed through Cisco's new cloud supply chain initiative generating $4
                                    billion in revenue
                                </li>
                            </ul> 
                            </div>
                     
                </div>
            </div>
            <div class="thick-line"></div>
            <div class="flexy">
                <div class="descy">
                <div class="company">Cisco Systems</div>
                        <div class="role">Undergraduate Technical Intern</div>
                        <div class="text">
                        During my first internship I specialized and learnt the following skills:
                            <ul>
                                <li>Front end development of a web app dashboard using AngularJS and Spring MVC frameworks</li>
                                <li>UI/UX design principles through speaking with several UI/UX designers</li>
                                <li>The soft skills and the nuances of working within a team as well as understanding the Supply Chain domain</li>
                            </ul>
                            Going into my second internship,I took on 3 projects each of which had me operate under a different capcity.
                            <ul>
                                <li>I lead a team of 4 interns on a project to build a proof of concept to demonstate a crowdsourcing platform which could be used by the planning team on Cisco's supply chain to increase forecasting accuracy.</li>
                                <li>I defined and built the capabilities of an email automaiton system which would be tiggered by a business event primarily utilizing MIME messaging</li>
                                <li>I worked on the frontend development under two software engineers making it responsive as well as adding other functionalities.</li>
                            </ul> 

</div>
                      
                </div>
                <div class="picy">
                    <img class="pics" src={intern} />
                </div>
            </div>
            <div class="thick-line"></div>


            <div class="flexy">
                <div class="picy">
                    <img class="pics" src={etc} />
                </div>
                <div class="descy">
                <div class="company">Cisco ETC-San Jose</div>
                        <div class="role">Data & Analytics Lead</div>
                        <div class="text">
                        Emerging Talent Chapter (ETC) is an inclusion and collaboration organization at Cisco with its San Jose chapter being the largest with 1800 members. 
                            I joined the board as the Data and Analytics Lead and my responsibilities included 
                            <ul>
                                <li>Helping to collect and organize several metrics from our members about our events   </li>
                                <li>Consolodating and presenting them to the leadership team helping them make data-driven decisions improving our member satisfaction by 11.34%. </li>
                                <li>Standardize event data collection procedures and metrics which were then implemented across all ETC chapters in Cisco</li>
                            </ul>     
                

</div>
                        </div>
            </div>
            <div class="thick-line"></div>
            <div class="flexy">
                <div class="descy">
                <div class="company">Santa Clara University</div>
                        <div class="role">Tour Guide & Peer Advisor</div>
                        <div class="text">
                            
                        Over the course of 2 years, I have served as a tour guide and a peer advisor for the school of engineering at SCU.
                        As a Tour Guide I was responsible for:
                        <ul>
                            <li>Leading college tours of ~20 students and parents helped sharpen my public speaking skills... and my ability to walk backwards.</li>
                            <li>Answering questions high school students and parents had about our college specifically the school of engineering</li>
                        </ul>  
                        As a Peer Advisor I was responsible for:
                        <ul>
                            <li>Being the point of contact for 30 freshmen, organizing social events, communicating relevent information, as well as helping them plan out their class schedule to ensure they graduate on time.</li>
                        </ul>                   
                

</div></div>
                <div class="picy">
                    <img class="pics" src={tour} />
                </div>
            </div>
            <div class="thick-line"></div>

            <div class="flexy">
                <div class="picy">
                    <img class="pics" src={niners} />
                </div>
                <div class="descy">
                <div class="company">San Francisco 49ers</div>
                        <div class="role">Guest Services Representative</div>
                        <div class="text">
                        During 49ers gamedays and concerts at Santa Clara I worked to ensure that fans would have the best experience as possible.
                                      Managing 2 sections of the stadium has taught me a lot and required me to think quickly on my feet. Additionally this job has given me several memorable experiences allowing me to watch the 49ers win the NFC Championship and seeing Coldplay perform on their tour.     
               

</div>
                        </div>
            </div>
            <div class="thick-line"></div>

            <div class="flexy">
                <div class="descy">
                <div class="company">Commuter Student Union</div>
                        <div class="role">President and Tour Guide</div>
                        <div class="text">
                        Over the course of 2 years I have served on the board of the commuter student union which is designed to ensure students who don't live on campus to have a sense of community at college.
                        The complexity of planning events has been a great learning tool as the pressure of promising free food to college students and not delivering is hard to replicate                       
                

</div>
                        </div>
                <div class="picy">
                    <img class="pics" src={csu} />
                </div>
            </div>
            



            {/* <div class="flexbox">
            <div class="mainbox">
                <div class="leftbox">
                        <div class="company">Cisco Systems</div>
                        <div class="role">Software Engineer II</div>
                        <div class="text">
                            Starting my career at Cisco was an amazing opportunity, especially having to take over a senior engineers' responsibilities 
                            as they went on extended leave really challenged me and allowed me to push myself to perform the following:
                            <ul>
                                <li>Managed 3 of 11 SpringBoot Java apps, overseeing maintenance and leading development based on new business
                                    requirements. Ensured SCA/SAST security compliance, Junit requirements, facilitated Kafka messaging, and supported Kubernetes containerization</li>
                                <li>Designed and showcased a proof of concept to integrate a Java application with CyberArk Conjur via REST APIs for improved
                                    security. Implemented modifications across all 11 applications, ensuring full operation with the Conjur security platform</li>
                                <li>Built an in-house tool utilizing Angular's framework to replace Trinamix's Fabconnect tool. It served as a Platform as a Service
                                    (PaaS) addition to Oracle Cloud Manufacturing
                                </li>
                                <li>Responsible for applications that handled every order passed through Cisco's new cloud supply chain initiative generating $4
                                    billion in revenue
                                </li>
                            </ul>                       
                            
                        </div>
                </div>
                <div class="rightBox">
                    <img class="pics" src={work} />
                </div>
            </div>
            <div class="mainbox">
                <div class="leftbox">
                        <div class="company">Cisco Systems</div>
                        <div class="role">Undergraduate Technical Intern</div>
                        <div class="text">
                            During my first internship I specialized and learnt the following skills:
                            <ul>
                                <li>Front end development of a web app dashboard using AngularJS and Spring MVC frameworks</li>
                                <li>UI/UX design principles through speaking with several UI/UX designers</li>
                                <li>The soft skills and the nuances of working within a team as well as understanding the Supply Chain domain</li>
                            </ul>
                            Going into my second internship, I went in with the goal of improving myself in areas such as networking and taking a more active role in picking up work.
                            I took on 3 projects each of which had me operate under a different capcity.
                            <ul>
                                <li>I lead a team of 4 interns on a project to build a proof of concept to demonstate a crowdsourcing platform which could be used by the planning team on Cisco's supply chain to increase forecasting accuracy.</li>
                                <li>I defined and built the capabilities of an email automaiton system which would be tiggered by a business event primarily utilizing MIME messaging</li>
                                <li>I worked on the frontend development under two software engineers making it responsive as well as adding other functionalities.</li>
                            </ul> 
                           
                            
                        </div>
                </div>
                <div class="rightBox">
                    <img class="pics" src={intern} />
   
                </div>
            </div>
            <div class="mainbox">
                <div class="leftbox">
                        <div class="company">Cisco ETC-San Jose</div>
                        <div class="role">Data & Analytics Lead</div>
                        <div class="text">
                            Emerging Talent Chapter (ETC) is an inclusion and collaboration organization at Cisco with its San Jose chapter being the largest with 1800 members. 
                            I joined the board as the Data and Analytics Lead helping to collect and organize several metrics from our members about our events and then presenting them to the leadership team helping them make data-driven decisions improving our member satisfaction by 11.34%.
                            We were able to standardize event data collection procedures and metrics which were then implemented across all ETC chapters in Cisco     
                        </div>
                </div>
                <div class="rightBox">
                    <div>
                    <img class="pics" src={etc} />
                    </div>
                </div>
            </div>
            <div class="mainbox">
                <div class="leftbox">
                        <div class="company">Santa Clara University</div>
                        <div class="role">Tour Guide & Peer Advisor</div>
                        <div class="text">
                        Over the course of 2 years, I have served as a tour guide and a peer advisor for the school of engineering at SCU, answering question high school students had about our college and aiding freshmen navigate their first year of college.
                        Leading college tours of ~20 students and parents helped sharpen my public speaking skills... and my ability to walk backwards.
                        During my senior year, I have served as a peer advisor being the point of contact for 30 freshmen, organizing social events, communicating relevent information, as well as helping them plan out their class schedule to ensure they graduate on time.     
                        </div>
                </div>
                <div class="rightBox">
                    <div>
                    <img class="pics" src={tour} />
                    </div>
                </div>
            </div>
            <div class="mainbox">
                <div class="leftbox">
                    <div class="company">San Francisco 49ers</div>
                    <div class="role">Guest Service Representative</div>
                    <div class="text">During 49ers gamedays and concerts at Santa Clara I worked to ensure that fans would have the best experience as possible.
                                      Managing 2 sections of the stadium has taught me a lot and required me to think quickly on my feet. Additionally this job has given me several memorable experiences allowing me to watch the 49ers win the NFC Championship and seeing Coldplay perform on their tour.
                    </div>
                </div>
                <div class="rightBox">
                    <div>
                    <img class="pics" src={niners} />
                    </div>
                </div>
            </div>
            <div class="mainbox">
                <div class="leftbox">
                        <div class="company">Commuter Student Union</div>
                        <div class="role">President & Treasurer</div>
                        <div class="text">
                        Over the course of 2 years I have served on the board of the commuter student union which is designed to ensure students who don't live on campus to have a sense of community at college.
                        The complexity of planning events has been a great learning tool as the pressure of promising free food to college students and not delivering is hard to replicate       
                        </div>
                </div>
                <div class="rightBox">
                    <div>
                    <img class="pics" src={csu} />
                    </div>
                </div>
            </div>
        </div> */}

        </div>
        
        );

}
export default MyExperiences