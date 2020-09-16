import React from 'react';
import './header.css';

const Header = ({currState, handleClick})=>{
   // console.log("header",1);
    const pageHandleClick = React.useCallback((event)=>{
        handleClick(event.target.textContent.toLowerCase());
    },[handleClick]);
    return (
        <div className="header">
            <span name="dashboard" onClick={pageHandleClick} className={"header-pagelinks" + (currState==='dashboard'?" header-onpage":"")}>Dashboard</span>
            <span name="userboard" onClick={pageHandleClick} className={"header-pagelinks" + (currState==='userboard'?" header-onpage":"")}>Userboard</span>
            <span className="header-title">Task Manager</span>
        </div>
    )
}

export default Header;