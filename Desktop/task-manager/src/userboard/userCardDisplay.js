import React from 'react';
import "./userBoard.css";

function UserCardDisplay(props){
    function handleEdit(){
        props.showUserForm();
    }

    function handleDelete(){
        const result = window.confirm("Do you want to delete this user?");
        if(!result)
        return;
        props.handleDelete(props.user.id);
    }

    return(
    <div className={props.className}>
        <img className="user-card-display-image" src={props.user.image} alt="User-Img"></img>
        <div className="user-card-display-name">{props.user.name}</div>
        <div className='user-card-display-profile'>{props.user.profile}</div>
        <div className='user-card-display-location'>{props.user.location}</div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
    )
}

export default UserCardDisplay;