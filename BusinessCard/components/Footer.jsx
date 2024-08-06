import React from "react";
import githubIcon from "../src/assets/github.png";

export default function Footer () {
    return (
        <div className="footer">
            <p className="portfolioSite">https://fairleyvincent.com</p>
            <btn className="githubBtn">
                <a href="https://github.com/fairleyv">
                    <img src={githubIcon} className="githubIcon" alt="an icon of the Github logo"/>  
                </a>
            </btn>
        </div>
    )
}