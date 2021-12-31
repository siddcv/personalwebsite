// JavaScript source code
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import '../css/Home.css';
////import About from "./About";
//class Home extends React.Component {
//    //state = {
//    //    todos: [
//    //        {
//    //            id: 1,
//    //            title: "setup development environment",
//    //            completed: true
//    //        },
//    //        {
//    //            id: 2,
//    //            title: "Develop  website and add content",
//    //            completed: false
//    //        },
//    //        {
//    //            id: 3,
//    //            title: "Deploy to a live server",
//    //            compelted:false
//    //        }
//    //    ]
//    //}
//    render() {
//        return (
//            <div>
//                <Nav/>
//                {/*<Header />*/}
//                {/*<Body />*/}
//                {/*<Experience />*/}
//                {/*<Projects />*/}
//                {/*<Leadership />*/}
//                {/*<Certifications />*/}
//                {/*<Footer/>*/}
//            {/*    <TodosList todos={this.state.todos} />*/}
//            </div>
//        );

//    }
//}
const Home = () => {
    return (
        <div>
            <Nav />
            <Landing />
            
        </div>
        )

}
export default Home
