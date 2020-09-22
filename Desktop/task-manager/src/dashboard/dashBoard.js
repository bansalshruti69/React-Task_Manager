import React from 'react';
import Header from '../header/Header';
import AccountManagementMessage from "./AccountManagementMessage";
import "./dashBoard.css";
import CardListGroup from "./CardListGroup";
//complete
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