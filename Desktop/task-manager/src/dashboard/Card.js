import React from 'react';
import "./dashBoard.css";
import CancelIcon from "./cancel-icon.png";
import EditIcon from "./edit-icon.png";
import CardForm from './CardForm';
import {useState, useCallback} from 'react';
//complete
const Card = ({deleteCard, card, cardList, ...props})=>{
    const [isForm,setIsForm] = useState(false);
    const handleCancel = useCallback(()=>{
        const result = window.confirm("Do you want to delete this card?");
        if(!result)
        return;
        deleteCard(cardList.id,card.id);
    },[deleteCard,card,cardList]);

    const handleEdit = useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = useCallback(()=>{
        setIsForm(false);
    },[]);

    return(
        <>
        <div className={"card-display "+(isForm?"hide":"show")}>
            <div className="card-content">
                <div className="card-text">
                    {card.task}
                </div>
                <div className="card-due-date">
                    Due Date: {card.status}
                </div>
            </div>
            <div className="card-button">
                <img onClick={handleCancel} src={CancelIcon} alt="Cancel Card"></img>
                <img onClick={handleEdit} src={EditIcon} alt="Edit Card"></img>
            </div>
        </div>
        <CardForm hideForm={hideForm} className={(isForm?"show":"hide")} {...props} cardList={cardList} card={card}/>
        </>
    );
}

export default Card;