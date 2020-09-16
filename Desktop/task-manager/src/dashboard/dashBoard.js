import React from 'react';
import Header from '../header/Header.js';
import AccountManagementMessage from "./AccountManagementMessage.js";
import "./dashBoard.css";
import CardListGroup from "./CardListGroup";

const DashBoard = (props)=>{
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