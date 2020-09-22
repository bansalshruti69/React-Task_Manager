import React from 'react';
import "./dashBoard.css";
import CardGroup from "./CardGroup";
import CancelIcon from "./cancel-icon.png";
import {useCallback} from 'react';
//compelete
const CardList = ({deleteCardList, cardList, ...props})=>{
    const handleDelete = useCallback(()=>{
        const result = window.confirm("Do you want to delete this User?");
        if(!result)
        return;
        deleteCardList(cardList.id);
    },[deleteCardList,cardList]);

    return (
        <div className="card-list">
            <div className="card-list-title">
                <span className="cardList-title-name">{cardList.cardListTitle}</span>
                <img src={CancelIcon} alt="Delete" className="delete-cardList-icon" onClick={handleDelete}></img>
            </div> 
            <CardGroup {...props} cardList={cardList}/>
        </div>
    );
}

export default CardList;