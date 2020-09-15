import React from 'react';
import "./dashBoard.css";
import Card from "./Card.js"
import AddCard from "./addCard.js";

function CardGroup(props){
    return (
        <div class="card-group">
            {props.cardList.cards.map(card=><Card card={card} {...props}/>)}
            <AddCard {...props}/>
        </div>
    );
}

export default CardGroup;