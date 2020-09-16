import React from 'react';
import "./dashBoard.css";
import Card from "./Card.js"
import AddCard from "./AddCard.js";

const CardGroup = (props)=>{
    const mapCardGroup = React.useCallback((card)=>{
        return (<Card key={card.id} card={card} {...props}/>);
    },[props]);
    
    return (
        <div className="card-group">
            {props.cardList.cards.map(mapCardGroup)}
            <AddCard {...props}/>
        </div>
    );
}

export default CardGroup;