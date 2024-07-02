import React from 'react';
import './tab.css';

const Tab = ({ label, onTabClick, isActive }) => {
    return (
       <button 
        className={"tab"}
        id={`${isActive ? 'active' : ''}-tab`} 
        onClick={onTabClick}>
            {label}
       </button>
    );
}

export default Tab;