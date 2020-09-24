import React from 'react';
import '../header.css';
import {useCallback} from 'react';
import { DASHBOARD, USERBOARD } from '../../reducer/actions/header';

const Header = ({currState, handleClick})=>{

    const pageHandleClick = useCallback((event)=>{
        handleClick(event.target.textContent.toUpperCase());
    },[handleClick]);

    return (
        <div className="header">
            <span onClick={pageHandleClick} className={"header-pagelinks" + (currState===DASHBOARD?" header-onpage":"")}>Dashboard</span>
            <span onClick={pageHandleClick} className={"header-pagelinks" + (currState===USERBOARD?" header-onpage":"")}>Userboard</span>
            <span className="header-title">Task Manager</span>
        </div>
    )
}

export default Header;