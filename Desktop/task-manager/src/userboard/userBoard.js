import React from 'react';
import Header from '../header/Header.js';
import "./userBoard.css";
import UserCardGroup from "./UserCardGroup.js"

const UserBoard = (props) => {
    return (
      <div className="userboard">
          <Header {...props}/>
          <UserCardGroup/>
      </div>
    )
}

export default UserBoard;