import React from 'react';
import './header.css';



function Header({currState, handleClick}){
    return (
        <div className="header">
            {(currState==='dashboard')? <span onClick={()=>handleClick('dashboard')} className="header-pagelinks header-onpage">Dashboard</span> :<span onClick={()=>handleClick('dashboard')} className="header-pagelinks">Dashboard</span>}
            {(currState==='userboard')? <span onClick={()=>handleClick('userboard')} className="header-pagelinks header-onpage">Userboard</span>:<span onClick={()=>handleClick('userboard')} className="header-pagelinks">Userboard</span>}
            <span className="header-title">Task Manager</span>
        </div>
    )
}

export default Header;