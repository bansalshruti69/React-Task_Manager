import React from 'react';
import Header from '../header/Header/Header';
import AccountManagementMessage from "./AccountManagementMessage";
import "./dashBoard.css";
import CardListGroup from "./CardListGroup/CardListGroup";
//complete
const DashBoard = ()=>{
    return (
        <div className="dashboard">
            <Header/>
            <div className="dashboard-body">
               <AccountManagementMessage/>
               <CardListGroup/>
            </div>
        </div>
    )
}

export default DashBoard;