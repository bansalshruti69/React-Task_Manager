import React from 'react';
import "./dashBoard.css";
import CardList from "./cardList.js";
import AddCardList from "./addCardList.js"

function CardListGroup(){
    const [cardLists,setCardLists] = React.useState(JSON.parse(localStorage.cardLists)||[]);

    function addCardList(obj){
        const updatedCardLists = [...cardLists, obj];
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    }

    function deleteCardList(val){
        const updatedCardLists = cardLists.filter((cardList)=>cardList.id!==val)
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    }

    function addCard(val, obj){
        const updatedCardLists = [...cardLists];
        const index = updatedCardLists.findIndex(cardList=> cardList.id===val);
        updatedCardLists[index].cards.push(obj);
        updatedCardLists[index].cardId = updatedCardLists[index].cardId+1;
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    }

    function deleteCard(id1,id2){
        const updatedCardLists = [...cardLists];
        const index1 = updatedCardLists.findIndex(cardList=> cardList.id===id1);
        updatedCardLists[index1].cards = updatedCardLists[index1].cards.filter(card=>card.id!==id2);
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    }

    function editCard(val, obj){
        const updatedCardLists = [...cardLists];
        const index1 = updatedCardLists.findIndex(cardList=> cardList.id===val);
        const index2 = updatedCardLists[index1].cards.findIndex(card=>card.id===obj.id);
        updatedCardLists[index1].cards[index2] = obj;
        setCardLists(updatedCardLists);
        localStorage.cardLists = JSON.stringify(updatedCardLists);
    }

    return(
        <div class="card-list-group">
            {cardLists.map(cardList=><CardList editCard={editCard} deleteCard={deleteCard} addCard={addCard} deleteCardList={deleteCardList} cardList={cardList}/>)}
            <AddCardList addCardList={addCardList}/>
        </div>
    );
}

export default CardListGroup;