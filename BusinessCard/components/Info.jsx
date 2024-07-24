import React from "react";
import emailIcon from "../src/assets/email.png";
import linkedinIcon from "../src/assets/linkedin.png";
import profilePic from "../src/assets/profilePic.jpeg";

export default function Info () {
    return (
        <div>
            <img src={profilePic} className="personalPhoto"/>
            <div className="personalInfo">
                <h3 className="name">Vincent (Trevez) Fairley</h3>
                <h4 className="job">Full Stack Developer</h4>
            </div>
            <div className="infoBtns">
                <btn className="emailBtn">
                    <a href="mailto:fairleyvincent@gmail.com">
                    <img src={emailIcon}className="emailIcon"/>Email</a>
                </btn>
                <btn className="linkedInBtn">
                    <a href="https://www.linkedin.com/in/vincent-fairley">
                    <img src={linkedinIcon} className="linkedInIcon"/>Linkedin</a>
                </btn>
            </div>
        </div>
    )
}