import React from 'react';
import "./skills.css";
import SkillItem from "../skill-item/SkillItem";
import javaLogo from "../../assets/img/java-svgrepo-com.svg";
import pythonLogo from "../../assets/img/python-svgrepo-com.svg";
import nodeLogo from "../../assets/img/node-js-svgrepo-com.svg";
import reactLogo from "../../assets/img/react-svgrepo-com.svg";
import htmlLogo from "../../assets/img/html5-svgrepo-com.svg";
import cssLogo from "../../assets/img/css3-svgrepo-com.svg";
import jsLogo from "../../assets/img/javascript-svgrepo-com.svg";
import cLogo from "../../assets/img/c-logo.svg";
import assemblyLogo from "../../assets/img/assembly-svgrepo-com.svg";
import svLogo from "../../assets/img/light-systemverilog-svgrepo-com.svg";
import gitLogo from "../../assets/img/git-svgrepo-com.svg";
import bashLogo from "../../assets/img/bash-icon-svgrepo-com.svg";


const Skills = () => {
    const skillList = [
        {
            title: "Java",
            logo: javaLogo
        },
        {
            title: "Python",
            logo: pythonLogo
        },
        {
            title: "ReactJS",
            logo: reactLogo
        },
        {
            title: "NodeJS",
            logo: nodeLogo
        },
        {
            title: "HTML",
            logo: htmlLogo
        },
        {
            title: "CSS",
            logo: cssLogo
        },
        {
            title: "JavaScript",
            logo: jsLogo
        },
        {
            title: "Git",
            logo: gitLogo
        },
        {
            title: "C",
            logo: cLogo
        },
        {
            title: "Assembly",
            logo: assemblyLogo
        },
        {
            title: "SystemVerilog",
            logo: svLogo
        },
        
        {
            title: "Bash",
            logo: bashLogo
        }
    ];

    return (
        <>
            <header>
                <h1>skills</h1>
                <h4>tools i'm proficient in.</h4>
            </header>

            <div className="skills-container">
                {skillList.map((skill, index) => (
                    <SkillItem
                        key={index}
                        title={skill.title}
                        logo={skill.logo}
                     />
                ))}
            </div>
        </>
    )
}

    export default Skills;