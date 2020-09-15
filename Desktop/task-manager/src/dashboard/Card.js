import React from 'react';
import "./dashBoard.css";
import CancelIcon from "./cancel-icon.png";
import EditIcon from "./edit-icon.png";
import CardForm from './cardForm';

function Card(props){
    const [isForm,setIsForm] = React.useState(false);
    function handleCancel(){
        props.deleteCard(props.cardList.id,props.card.id);
    }

    function handleEdit(){
        setIsForm(true);
    }

    function hideForm(){
        setIsForm(false);
    }

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