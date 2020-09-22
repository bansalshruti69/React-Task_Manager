import React from 'react';
import "./dashBoard.css";
import {useCallback} from 'react';
import {useState} from 'react';
import { Input } from "baseui/input";
//complete
const AddCardListForm = ({addCardList, hideForm,...props})=>{
    const [cardListTitle,setCardListTitle] = useState("");
    const [cardListId,setCardListId] = useState(JSON.parse(localStorage.cardListId) ||0);

    const handleChange = useCallback((event)=>{
        setCardListTitle(event.target.value);
    },[])

    const handleCancel = useCallback(()=>{
        setCardListTitle("");
        hideForm();
    },[hideForm]);

    const handleSave = useCallback(()=>{
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
            <Input 
            placeholder="Enter the card list title here..." 
            value={cardListTitle} 
            onChange={handleChange}
            overrides={{
                InputContainer: {
                  style: ({ $theme }) => {
                    return {
                      outline: `${$theme.colors.warning600} solid`,
                      backgroundColor:"white",
                      borderRadius:"3px"
                    };
                  }
                }
              }}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            
        </div>
    );
}

export default AddCardListForm;