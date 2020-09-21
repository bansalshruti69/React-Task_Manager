import React from 'react';
import "./dashBoard.css";
import Card from "./Card.js"
import AddCard from "./AddCard.js";
import {useCallback} from 'react';
//complete
const CardGroup = ({cardList,...props})=>{
    console.log("Hey",props);
    const mapCardGroup = useCallback((card)=>{
        return (<Card key={card.id} card={card} {...props} cardList={cardList}/>);
    },[props,cardList]);

    return (
        <div className="card-group">
            {cardList.cards.map(mapCardGroup)}
            <AddCard {...props} cardList={cardList}/>
        </div>
    );
}

export default CardGroup;