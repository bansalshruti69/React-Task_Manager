import React from 'react';
import Header from '../header/HeaderContainer';
import AccountManagementMessage from "./AccountManagementMessage";
import "./dashBoard.css";
import CardListGroup from "./CardListGroupContainer";
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