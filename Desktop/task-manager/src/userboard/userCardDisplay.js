import React from 'react';
import "./userBoard.css";

const UserCardDisplay = React.memo(({showUserForm, ...props})=>{
    const handleEdit = React.useCallback(()=>{
        showUserForm();
    },[showUserForm]);

    const handleDelete = React.useCallback(()=>{
        const result = window.confirm("Do you want to delete this user?");
        if(!result)
        return;
        props.handleDelete(props.user.id);
    },[props]);

    function renderUserDetails(){
        return(
            <>
            <img className="user-card-display-image" src={props.user.image} alt="User-Img"></img>
            <div className="user-card-display-name">{props.user.name}</div>
            <div className='user-card-display-profile'>{props.user.profile}</div>
            <div className='user-card-display-location'>{props.user.location}</div>
            </>
        )
    }
    return(
    <div className={props.className}>
        {renderUserDetails()}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
    )
})

export default UserCardDisplay;