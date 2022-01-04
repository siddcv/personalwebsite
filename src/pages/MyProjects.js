// JavaScript source code
// JavaScript source code
import React from "react";
import Nav from "../components/Nav";
import '../css/Experience.css';
import todo from '../images/TodoList.mp4'
import piano from '../images/Piano.JPG'


function MyProjects() {
    return (
        <div>
            <Nav />
            <div class="exp">
                <div class="flex1">
                    <h3>This Website!</h3>
                    <h3> December 2021 </h3>
                </div>
                <p> I built this website from scratch having learnt the React framweork over the course of 2 weeks and combined it with my previous knowledge of HTML, CSS and JS
                    It was a great learning experience having to build a live application while also learning React at the same time. 
                </p>
            </div>

            <div class="exp">
                <div class="flex1">
                    <h3>To Do List</h3>
                    <h3> November 2021 - December 2021 </h3>
                </div>
                <div class="flex2">
                    <p>Along with two classmates, I built a persistent multi-page application which connects to a Mongo database and stores and displays data using features of CRUD.
                      We built a To Do List for college students to use to keep track of assignments and due dates. Assignments could be searched up by class, with all the assignments for the class listed below.
                    </p>
                    <video muted>
                        <source src={todo} type="video/mp4"/>
                    </video>

                </div>
            </div>

            <div class="exp">
                <div class="flex1">
                    <h3>Nasdaq Database</h3>
                    <h3> July 2020 - September 2020 </h3>
                </div>
                <p>During the summer of 2020, I grew a strong interest in the stock market and learning about stocks however, I couldn't find a central place that would have all the necessary information for me to make a decision about picking stocks.
                    Therefore I took it upon myself to do that myself. I strengthened my python skills and used webscraping techniques and python data structure to compile a database with all the releveant information about 2830 Nasdaq companies.
                    Further I used pivot tables in Excel to use data visualization to make the data more easily comprehensible.
                </p>
                <p> The repository can be found at https://github.com/siddcv/NasdaqDataBase </p>
            </div>

            <div class="exp">
                <div class="flex1">
                    <h3>Glove Piano</h3>
                    <h3> November 2018 - December 2018 </h3>
                </div>
                <div class="flex2">
                    <p> During my freshmen year of college, for our introductory engineering class as a group project we built a glove piano using an arduino board.
                        By attaching flex sensors to each finger of the glove, the movement of a finger to a certain degree would play a certain note allowing you to play a song from your fingertips.
                    </p>
                    <img src={piano}/>

                </div>
            </div>



        </div>
    );
}

export default MyProjects;
