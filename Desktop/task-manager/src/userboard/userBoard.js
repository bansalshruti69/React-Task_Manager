import React from 'react';
import Header from '../header/Header/Header';
import "./userBoard.css";
import UserCardGroup from "./UserCardGroup"

const UserBoard = () => {
    return (
      <div className="userboard">
          <Header/>
          <UserCardGroup/>
      </div>
    )
}

export default UserBoard;