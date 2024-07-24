import React from "react";

export default function Info () {
    return (
        <div>
            <img className="personalPhoto"/>
            <div className="personalInfo">
                <h3 className="name">Name</h3>
                <h4 className="job">Job Title</h4>
                <p className="website">Name Of Portfolio Site</p>
            </div>
            <div className="infoBtns">
                <btn className="emailBtn">Email</btn>
                <btn className="linkedInBtn">Linkedin</btn>
            </div>
        </div>
    )
}