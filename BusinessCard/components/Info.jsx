import React from "react";

export default function Info () {
    return (
        <div>
            <img className="personalPhoto"/>
            <div className="personalInfo">
                <h3 className="name">Name</h3>
                <h4 className="job">Job Title</h4>
            </div>
            <div className="infoBtns">
                <btn className="emailBtn">
                    <a href="mailto:fairleyvincent@gmail.com">
                    <span className="emailIcon"></span>Email</a>
                </btn>
                <btn className="linkedInBtn">
                    <a href="www.linkedin.com/in/vincent-fairley">
                    <span className="linkedInIcon"></span>Linkedin</a>
                </btn>
            </div>
        </div>
    )
}