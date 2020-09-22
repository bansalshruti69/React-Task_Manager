import React from 'react';
import Header from '../header/Header.js';
import "./userBoard.css";
import UserCardGroup from "./UserCardGroup"

const UserBoard = (props) => {
    return (
      <div className="userboard">
          <Header {...props}/>
          <UserCardGroup/>
      </div>
    )
}

export default UserBoard;