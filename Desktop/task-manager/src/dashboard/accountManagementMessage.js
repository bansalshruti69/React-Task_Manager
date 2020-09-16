import React from 'react';
import "./dashBoard.css";

const AccountManagementMessage = ()=>{
    const [show,setShow] = React.useState(false); 
    const handleClick = React.useCallback((event)=>{
        if(event.target.id!=="account-management-message-cancel-icon")
        return;
        setShow(false);
    },[]);

    const handleShow = React.useCallback((event)=>{
        if(event.target.id!=="account-management-message-hidden-cancel-icon")
        return;
        setShow(true);
    },[]);
    
    return (
        <>
        <div className={"account-management-message-hidden "+(show?"hide":"show")} onClick={handleShow}>
            <strong id="account-management-message-hidden-cancel-icon">x</strong>
        </div>
        <div className={"account-management-message "+(show?"show":"hide")} onClick={handleClick}>
            <strong>Heads up!</strong> Your Task Manager account is managed by Sprinklr.
            <button className="learn-more">Learn more</button>
            <div className="account-management-cancel">
                <strong id="account-management-message-cancel-icon">x</strong>
            </div>
        </div>
        </>
    );
}

export default AccountManagementMessage;