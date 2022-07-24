import React from "react";
import '../styles/Info.css';
import shams from "../images/shams.jpg";

function Info() {
    return (
        <>
        <img src={shams} alt="shams-profile" className="profile-pic"/>
        <h1 className="big-header">Shams Kadri</h1>
        <p className="position-title">Frontend Developer</p>
        <p className="website"><a className="website" href="">shamskadri.website</a></p>
        <div className="buttons">
            <button className="email"><a className="email" href="mailto:shams.kadri@ryerson.ca"><i class="fa-solid fa-envelope"></i> Email</a></button>
            <button className="linkedin"><a className="linkedin" href="https://www.linkedin.com/in/shamskadri/"><i className="fa-brands fa-linkedin"></i> Linkedin</a></button>
        </div>
        </>
    )
}

export default Info;