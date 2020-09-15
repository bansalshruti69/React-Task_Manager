import React from 'react';
import "./dashBoard.css";
import CardGroup from "./cardGroup.js";
import CancelIcon from "./cancel-icon.png";

function CardList(props){
    function handleDelete(){
        props.deleteCardList(props.cardList.id);
    }

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