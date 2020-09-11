import React from 'react';
import Header from '../header/header.js';
import "./dashBoard.css";

function  DashBoard(props){
    return (
        <div class="dashboard">
            <Header {...props}/>
        </div>
    )
}

export default DashBoard;