import React from "react";
import ReactDOM from "react-dom";
import "./stylez.css"
import Header from "../Header/Header";

function AboutUs(){


    return(
        <>
        <Header/>
        <div className="aboutus-container">
        <h1>
            Our Mission!
        </h1>
            <p>To definitely not be an Amazon rip off...</p>
            </div>
        </>
    )
}

export default AboutUs;