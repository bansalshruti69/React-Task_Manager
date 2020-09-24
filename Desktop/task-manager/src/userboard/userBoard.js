import React from 'react';
import Header from '../header/HeaderContainer';
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