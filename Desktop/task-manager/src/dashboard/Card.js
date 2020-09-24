import React from 'react';
import "./dashBoard.css";
import CancelIcon from "./cancel-icon.png";
import EditIcon from "./edit-icon.png";
import CardForm from './CardForm';
import {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import { deleteCard } from '../reducer/actions/dashboard';
//complete
let Card = ({card, cardList, dispatch})=>{
    const [isForm,setIsForm] = useState(false);
    const handleCancel = useCallback(()=>{
        const result = window.confirm("Do you want to delete this card?");
        if(!result)
        return;
        dispatch(deleteCard(cardList.id,card.id));
    },[dispatch,card,cardList]);

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
        <CardForm hideForm={hideForm} className={(isForm?"show":"hide")} cardList={cardList} card={card}/>
        </>
    );
}

Card = connect()(Card);

export default Card;