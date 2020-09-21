import React from 'react';
import "./dashBoard.css";
import CardList from "./CardList.js";
import AddCardList from "./AddCardList.js"
import CustomModal from "./CustomModal.js";
import {useState, useCallback} from 'react';
//complete
const CardListGroup = ()=>{
    const [cardLists,setCardLists] = useState(JSON.parse(localStorage.cardLists)||[]);
    const [modalIsOpen,setIsOpen] = useState(false);
    const addCardList = useCallback(obj=>{
        const updatedCardLists = [...cardLists, obj];
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists]);

    const deleteCardList = useCallback((val)=>{
        const updatedCardLists = cardLists.filter((cardList)=>cardList.id!==val)
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists])

    const addCard = useCallback((val, obj)=>{
        const updatedCardLists = [...cardLists];
        const index = updatedCardLists.findIndex(cardList=> cardList.id===val);
        updatedCardLists[index].cards.push(obj);
        updatedCardLists[index].cardId = updatedCardLists[index].cardId+1;
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists]);

    const deleteCard = useCallback((id1,id2)=>{
        const updatedCardLists = [...cardLists];
        const index1 = updatedCardLists.findIndex(cardList=> cardList.id===id1);
        updatedCardLists[index1].cards = updatedCardLists[index1].cards.filter(card=>card.id!==id2);
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists])

    const editCard = useCallback((val, obj)=>{
        const updatedCardLists = [...cardLists];
        const index1 = updatedCardLists.findIndex(cardList=> cardList.id===val);
        const index2 = updatedCardLists[index1].cards.findIndex(card=>card.id===obj.id);
        updatedCardLists[index1].cards[index2] = obj;
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    },[cardLists]) 

    const mapCardListGroup = useCallback((cardList)=>
    (<CardList key={cardList.id} editCard={editCard} deleteCard={deleteCard} addCard={addCard} deleteCardList={deleteCardList} cardList={cardList}/>),[editCard,deleteCard,addCard,deleteCardList]);
    
    const handleGlobalClick = useCallback(()=>{
        setIsOpen(true);
    },[])

    const closeModal = useCallback(()=>{
        setIsOpen(false);
    },[])

    return(
        <>
        <span className="add-card-global" onClick={handleGlobalClick} >Add Card</span>
        <div className="card-list-group">
            {cardLists.map(mapCardListGroup)}
            <AddCardList addCardList={addCardList}/>
            <CustomModal modalIsOpen={modalIsOpen} cardLists={cardLists} hideForm={closeModal} addCard={addCard}/>
        </div>
        </>
    );
}

export default CardListGroup;