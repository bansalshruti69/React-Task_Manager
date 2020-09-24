import React from 'react';
import "../dashBoard.css";
import {useCallback} from 'react';
import {useState} from 'react';
import { Input } from "baseui/input";
//complete
const AddCardListForm = ({hideForm, className,cardListId,setCardListId,addCardListFunction})=>{
    const [cardListTitle,setCardListTitle] = useState("");
    const handleChange = useCallback((event)=>{
        setCardListTitle(event.target.value);
    },[])

    const handleCancel = useCallback(()=>{
        setCardListTitle("");
        hideForm();
    },[hideForm]);

    const handleSave = useCallback(()=>{
        const tempObj ={}; 
        tempObj.id = cardListId;;
        tempObj.cardId = 0;
        setCardListId();
        tempObj.cardListTitle = cardListTitle;
        tempObj.cards = [];
        addCardListFunction(tempObj);
        handleCancel();
    },[addCardListFunction,cardListId,cardListTitle,handleCancel,setCardListId]);

    
    return (
        
        <div className={"add-card-list-form card-list "+className}>
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