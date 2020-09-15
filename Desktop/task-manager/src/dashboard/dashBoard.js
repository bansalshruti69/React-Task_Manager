import React from 'react';
import Header from '../header/header.js';
import AccountManagementMessage from "./accountManagementMessage";
import "./dashBoard.css";
import CardListGroup from "./cardListGroup";

function  DashBoard(props){
    return (
        <div className="dashboard">
            <Header {...props}/>
            <div className="dashboard-body">
               <AccountManagementMessage/>
               <CardListGroup/>
            </div>
        </div>
    )
}

export default DashBoard;