import React from 'react';
import "./dashBoard.css";
import Card from "./Card.js"
import AddCard from "./AddCard.js";

const CardGroup = (props)=>{
    const mapCardGroup = React.useCallback((card)=>{
        return (<Card key={card.id} card={card} {...props}/>);
    },[props]);

    const mappedCardGroup = React.useMemo(()=>props.cardList.cards.map(mapCardGroup),[props,mapCardGroup]);

    return (
        <div className="card-group">
            {mappedCardGroup}
            <AddCard {...props}/>
        </div>
    );
}

export default CardGroup;