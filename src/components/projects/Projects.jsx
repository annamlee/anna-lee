import React from 'react';
import "./projects.css";
import ProjectCard from "../project-card/ProjectCard";

const Projects = () => {
    const projectList = [
        {
            title: "Schoolhouse Ghana",
            stack: "MongoDB, Express.js, React, Node.js",
            desc: "Commissioned by the GodFreds Foundation and the \
            UCSD Global Ties program, designed and built a full-stack\
            file-sharing platform for the SAS (Semanhyiya American \
            School) in Senase, Ghana.",
            gitLink: "https://github.com/UCSD-Global-TIES",
            link: "https://github.com/UCSD-Global-TIES/react-schoolhouse-ghana/blob/master/README.md#installation"
        },
        {
            title: "Personal Portfolio",
            stack: "ReactJS, HTML, CSS, JavaScript",
            desc: "The site you're currently on! I developed this\
            website to learn ReactJS and showcase some of my\
            projects along the way.",
            gitLink: "https://github.com/annamlee/anna-lee",
            link: "https://annamlee.me"
        },
        {
            title: "Developer Journal",
            stack: "HTML, CSS, JavaScript",
            desc: "A web application that consists of a calendar,\
            a markdown editor, and an integrated project and task manager\
            system. Built with a team of 9 developers utilizing Agile sprints.",
            gitLink: "https://github.com/annamlee/developer-journal",
            link: "https://digitaldr3amt3am-journal.netlify.app/"
        },
        {
            title: "Sentiment Rating",
            stack: "HTML, CSS, JavaScript",
            desc: "A widget that has users log their emotions and\
            outputs a percentage breakdown of how often each emotion\
            is logged. Built with a team of 9 developers.",
            gitLink: "https://github.com/annamlee/sentiment-rating",
            link: "https://cse110-sp24-group33.github.io/warmup-exercise/"
        }
    ];

    return (
        <>
            <header>
                <h1>Projects</h1>
                <h4>A list of my projects!</h4>
            </header>

            <div className="projects-container">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        stack={project.stack}
                        link={project.link}
                        gitLink={project.gitLink}
                    />
                ))}
            </div>
        </>
    )
}

export default Projects;
