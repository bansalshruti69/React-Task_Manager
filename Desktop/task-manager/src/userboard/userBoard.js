import React from 'react';
import Header from '../header/header.js';
import "./userBoard.css";
import UserCardGroup from "./userCardGroup.js"

function  UserBoard(props){
    return (
      <div className="userboard">
          <Header {...props}/>
          <UserCardGroup/>
      </div>
    )
}

export default UserBoard;