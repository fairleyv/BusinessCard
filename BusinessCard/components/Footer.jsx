import React from "react";
import githubIcon from "../src/assets/github.png";

export default function Footer () {
    return (
        <div className="footer">
            <p className="portfolioSite">Name of Portfolio Site</p>
            <btn className="githubBnt">
                <a href="https://github.com/fairleyv">
                    <img src={githubIcon} className="githubIcon"/>  
                </a>
            </btn>
        </div>
    )
}