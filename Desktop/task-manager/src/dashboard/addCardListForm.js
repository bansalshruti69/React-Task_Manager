import React from 'react';
import "./dashBoard.css";

const AddCardListForm = ({hideForm, addCardList, ...props})=>{
    const [cardListTitle,setCardListTitle] = React.useState("");
    const [cardListId,setCardListId] = React.useState(JSON.parse(localStorage.cardListId) ||0);

    const handleChange = React.useCallback((event)=>{
        setCardListTitle(event.target.value);
    },[])

    const handleCancel = React.useCallback(()=>{
        setCardListTitle("");
        hideForm();
    },[hideForm]);

    const handleSave = React.useCallback(()=>{
        const tempObj ={};
        const val = cardListId;
        tempObj.id = val;
        tempObj.cardId = 0;
        setCardListId(val+1);
        localStorage.cardListId = JSON.stringify(val+1);
        tempObj.cardListTitle = cardListTitle;
        tempObj.cards = [];
        addCardList(tempObj);
        handleCancel();
    },[addCardList,cardListId,cardListTitle,handleCancel]);

    return (
        <div className={"add-card-list-form card-list "+props.className}>
            <input placeholder="Enter the card list title here..." value={cardListTitle} onChange={handleChange}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default AddCardListForm;