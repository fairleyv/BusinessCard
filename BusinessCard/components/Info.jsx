import React from "react";
import emailIcon from "../src/assets/email.png";
import linkedinIcon from "../src/assets/linkedin.png";
import profilePic from "../src/assets/profilePic.jpeg";

export default function Info () {
    return (
        <div>
            <card className="infoCard">
            <img src={profilePic} className="personalPhoto" alt="Picture of the business card owner"/>
            <div className="personalInfo">
                <h3 className="name">Vincent (Trevez) Fairley</h3>
                <h4 className="job">Full Stack Developer</h4>
            </div>
            <div className="infoBtns">
                <button type="button" className="emailBtn">
                    <a href="mailto:fairleyvincent@gmail.com">
                    <img src={emailIcon}className="emailIcon" alt="an icon of an envelope"/>Email</a>
                </button>
                <button type="button" className="linkedInBtn">
                    <a href="https://www.linkedin.com/in/vincent-fairley">
                    <img src={linkedinIcon} className="linkedInIcon" alt="an icon of the linkedIn logo"/>Linkedin</a>
                </button>
            </div>
            </card>
        </div>
    )
}