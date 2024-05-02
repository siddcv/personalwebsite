// JavaScript source code
import React from "react";
import { useEffect } from 'react';
import '../css/Contact.css';
import profile from '../images/RWD_4842.jpg'
import Pdf from '../images/Resume.pdf';
import { FaLinkedin, FaGithubAlt, FaEnvelopeOpen, FaFilePdf } from 'react-icons/fa';


function Contacts() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    const pStyle = {
        fontSize: '20px',
      };    
    return (
        <div class="mainBox">
            <div class="leftBox">
                <div class="top">
                    <div class="cm">
                        <h1>Contact Me!</h1>
                    </div>
                    <div class="text">
                        <p style={pStyle}>  
                        Thanks for taking your time to scroll through my webpage! For more information or to contact me feel free to use the below links.
                        </p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="iconRow">
                        <div class="icons">
                        <a href="https://www.linkedin.com/in/siddvenkatesh/">
                            <FaLinkedin style={{ fontSize: '32px' }} /> 
                        </a>
                        </div>
                        <div class="names">
                        <a href="https://www.linkedin.com/in/siddvenkatesh/">Linkedin</a>
                        </div>
                    </div>
                    <div class="iconRow">
                        <div class="icons">
                        <a href="https://github.com/siddcv">
                            <FaGithubAlt style={{ fontSize: '32px' }} /> 
                        </a>
                        </div>
                        <div class="names">
                        <a href="https://github.com/siddcv">GitHub</a> 
                        </div>
                    </div>
                    <div class="iconRow">
                        <div class="icons">
                        <a href="mailto:venkatesh.sidd@gmail.com"><FaEnvelopeOpen style={{ fontSize: '32px' }} /> </a>
                        </div>
                        <div class="names">
                        <a href="mailto:venkatesh.sidd@gmail.com">Email</a>
                        </div>
                    </div>
                    <div class="iconRow">
                        <div class="icons">
                        <a href={Pdf} target = "_blank"><FaFilePdf style={{ fontSize: '32px' }} /> </a>
                        </div>
                        <div class="names">
                        <a href={Pdf} target = "_blank">Resume</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="rightbox">
                <div>
                <img class="mp" src={profile} />
                </div>
            </div>
        </div>

           );

}
export default Contacts