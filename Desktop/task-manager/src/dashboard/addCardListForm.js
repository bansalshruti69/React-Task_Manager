import React from 'react';
import "./dashBoard.css";

function AddCardListForm(props){
    const [cardListTitle,setCardListTitle] = React.useState("");
    const [cardListId,setCardListId] = React.useState(JSON.parse(localStorage.cardListId) ||0);

    function handleChange(event){
        setCardListTitle(event.target.value);
    }

    function handleCancel(){
        setCardListTitle("");
        props.hideForm();
    }

    function handleSave(){
        const tempObj ={};
        const val = cardListId;
        tempObj.id = val;
        tempObj.cardId = 0;
        setCardListId(val+1);
        localStorage.cardListId = JSON.stringify(val+1);
        tempObj.cardListTitle = cardListTitle;
        tempObj.cards = [];
        props.addCardList(tempObj);
        handleCancel();
    }

    return (
        <div className={"add-card-list-form card-list "+props.className}>
            <input placeholder="Enter the card list title here..." value={cardListTitle} onChange={handleChange}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default AddCardListForm;