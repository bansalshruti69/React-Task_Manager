import React from 'react';
import "./dashBoard.css";
import CardGroup from "./CardGroup.js";
import CancelIcon from "./cancel-icon.png";

const CardList = (props)=>{
    const handleDelete = React.useCallback(()=>{
        const result = window.confirm("Do you want to delete this User?");
        if(!result)
        return;
        props.deleteCardList(props.cardList.id);
    },[props]);

    return (
        <div className="card-list">
            <div className="card-list-title">
                <span className="cardList-title-name">{props.cardList.cardListTitle}</span>
                <img src={CancelIcon} alt="Delete" className="delete-cardList-icon" onClick={handleDelete}></img>
            </div> 
            <CardGroup {...props}/>
        </div>
    );
}

export default CardList;