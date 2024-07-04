import React, { useState } from 'react';
import "./main.css";
import Tab from "../tab/Tab";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

const Main = () => {
    const [activeTab, setActiveTab] = useState("about");

    // render content based on which tab is active
    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            case "skills":
                return <Skills />;
            default:
                return <About />;
        }
    }

    return (
        <div className="main-container">
            <main className="window-container">
                <div className="tabs-container">
                    <Tab label="about" onTabClick={() => setActiveTab("about")} isActive={activeTab === "about"} />
                    <Tab label="projects" onTabClick={() => setActiveTab("projects")} isActive={activeTab === "projects"} />
                    <Tab label="skills" onTabClick={() => setActiveTab("skills")} isActive={activeTab === "skills"} />
                </div>
                <div className="content-container">
                    <div className="tab-content">
                        {renderContent()}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;