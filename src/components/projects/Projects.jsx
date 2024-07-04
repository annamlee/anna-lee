import React from 'react';
import "./projects.css";
import ProjectCard from "../project-card/ProjectCard";

const Projects = () => {
    const projectList = [
        {
            title: "personal porfolio",
            stack: "ReactJS, HTML, CSS, JavaScript",
            desc: "the site you're currently on! i developed this\
            website to learn ReactJS and showcase some of my\
            projects along the way.",
            gitLink: "https://github.com/annamlee/anna-lee",
            link: "https://annamlee.me"
        },
        {
            title: "developer journal",
            stack: "HTML, CSS, JavaScript",
            desc: "a web application that consists of a calendar,\
            a markdown editor, and an integrated project and task manager\
            system. built with a team of 8+ developers utilizing Agile sprints.",
            gitLink: "https://github.com/annamlee/developer-journal",
            link: "https://digitaldr3amt3am-journal.netlify.app/"
        },
        {
            title: "sentiment rating",
            stack: "HTML, CSS, JavaScript",
            desc: "a widget that has users log their emotions and\
            outputs a percentage breakdown of how often each emotion\
            is logged. built with a team of 8+ developers.",
            gitLink: "https://github.com/annamlee/sentiment-rating",
            link: "https://cse110-sp24-group33.github.io/warmup-exercise/"
        }
    ];

    return (
        <>
            <header>
                <h1>projects</h1>
                <h4>a list of my projects!</h4>
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
