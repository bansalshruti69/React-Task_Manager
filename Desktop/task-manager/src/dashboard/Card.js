import React from 'react';
import "./dashBoard.css";
import CancelIcon from "./cancel-icon.png";
import EditIcon from "./edit-icon.png";
import CardForm from './CardForm';

const Card = (props)=>{
    const [isForm,setIsForm] = React.useState(false);
    const handleCancel = React.useCallback(()=>{
        const result = window.confirm("Do you want to delete this card?");
        if(!result)
        return;
        props.deleteCard(props.cardList.id,props.card.id);
    },[props]);

    const handleEdit = React.useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = React.useCallback(()=>{
        setIsForm(false);
    },[]);

    return(
        <>
        <div className={"card-display "+(isForm?"hide":"show")}>
            <div className="card-content">
                <div className="card-text">
                    {props.card.task}
                </div>
                <div className="card-due-date">
                    Due Date: {props.card.status}
                </div>
            </div>
            <div className="card-button">
                <img onClick={handleCancel} src={CancelIcon} alt="Cancel Card"></img>
                <img onClick={handleEdit} src={EditIcon} alt="Edit Card"></img>
            </div>
        </div>
        <CardForm hideForm={hideForm} className={(isForm?"show":"hide")} {...props}/>
        </>
    );
}

export default Card;