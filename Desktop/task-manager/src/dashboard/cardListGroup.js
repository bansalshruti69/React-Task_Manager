import React from 'react';
import "./dashBoard.css";
import CardList from "./CardList.js";
import AddCardList from "./AddCardList.js"

const CardListGroup = ()=>{
    const [cardLists,setCardLists] = React.useState(JSON.parse(localStorage.cardLists)||[]);

    const addCardList = React.useCallback((obj)=>{
        const updatedCardLists = [...cardLists, obj];
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists]);

    const deleteCardList = React.useCallback((val)=>{
        const updatedCardLists = cardLists.filter((cardList)=>cardList.id!==val)
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists])

    const addCard = React.useCallback((val, obj)=>{
        const updatedCardLists = [...cardLists];
        const index = updatedCardLists.findIndex(cardList=> cardList.id===val);
        updatedCardLists[index].cards.push(obj);
        updatedCardLists[index].cardId = updatedCardLists[index].cardId+1;
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists]);

    const deleteCard = React.useCallback((id1,id2)=>{
        const updatedCardLists = [...cardLists];
        const index1 = updatedCardLists.findIndex(cardList=> cardList.id===id1);
        updatedCardLists[index1].cards = updatedCardLists[index1].cards.filter(card=>card.id!==id2);
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists])

    const editCard = React.useCallback((val, obj)=>{
        const updatedCardLists = [...cardLists];
        const index1 = updatedCardLists.findIndex(cardList=> cardList.id===val);
        const index2 = updatedCardLists[index1].cards.findIndex(card=>card.id===obj.id);
        updatedCardLists[index1].cards[index2] = obj;
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists]) 

    const mapCardListGroup = React.useCallback((cardList)=>
    (<CardList key={cardList.id} editCard={editCard} deleteCard={deleteCard} addCard={addCard} deleteCardList={deleteCardList} cardList={cardList}/>),[editCard,deleteCard,addCard,deleteCardList]);
    
    const mappedCardListGroup = React.useMemo(()=>{cardLists.map(mapCardListGroup)},[cardLists,mapCardListGroup]);
    
    return(
        <div className="card-list-group">
            {mappedCardListGroup}
            <AddCardList addCardList={addCardList}/>
        </div>
    );
}

export default CardListGroup;