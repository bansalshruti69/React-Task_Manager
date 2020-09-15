import React from 'react';
import "./dashBoard.css";

function AccountManagementMessage(){
    function handleCancel(event){
        if(event.target.id!=="account-management-message-cancel-icon")
        return;
        event.currentTarget.remove();
    }

    return (
        <div className="account-management-message" onClick={handleCancel}>
            <strong>Heads up!</strong> Your Task Manager account is managed by Sprinklr.
            <button className="learn-more">Learn more</button>
            <div className="account-management-cancel">
                <strong id="account-management-message-cancel-icon">x</strong>
            </div>
        </div>
    );
}

export default AccountManagementMessage;