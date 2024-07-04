import React from 'react';
import "./skill-item.css";

const SkillItem = ({ title, logo }) => {
    return (
        <div className="skill-item">
            <img className="skill-logo" src={logo} alt="" />
            <p className="skill-title">{title}</p>
        </div>
    )
}

export default SkillItem;